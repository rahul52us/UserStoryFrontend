import { Box, Button, ButtonGroup, Flex, IconButton, useColorModeValue } from "@chakra-ui/react";
import { useRef, useState } from "react";
import TestimonialForm from "./component/TestimonialForm";
import { observer } from "mobx-react-lite";
import TestimonialList from "./TestimonialGridList";
import { headerHeight } from "../../../config/constant/variable";
import DashPageHeader from "../../../config/component/common/DashPageHeader/DashPageHeader";
import Pagination from "../../../config/component/pagination/Pagination";
import DashPageTitle from "../../../config/component/common/DashPageTitle/DashPageTitle";
import { dashboard } from "../../../config/constant/routes";
import DashFormModel from "../../../config/component/common/DashFormModel/DashFormModel";
import CustomDrawer from "../../../config/component/Drawer/CustomDrawer";
import store from "../../../store/store";
import { FiPlusCircle, FiSettings } from "react-icons/fi";
import TestimonialTableList from "./TestimonialTableList";
import CustomInput from "../../../config/component/CustomInput/CustomInput";
import { RiRefreshLine } from "react-icons/ri";

const Testimonial = observer(() => {
const {
	TestimonialStore: {
	openTestimonialDrawer,
	setOpenTestimonialDrawer,
	testimonialLayout,
	setTestimonialLayout,
	},
} = store;
const tableRef = useRef<HTMLDivElement>(null);
const [isFullScreen, setIsFullScreen] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [openTestimonial, setOpenTestimonial] = useState(false);

const items = [
	{ label: "Home", link: "/" },
	{ label: "Dashboard", link: dashboard.home },
	{ label: "Testimonials" },
];

const toggleFullScreen = () => {
	if (tableRef.current) {
	if (!document.fullscreenElement) {
		tableRef.current
		.requestFullscreen()
		.then(() => setIsFullScreen(true))
		.catch((err) => {
			console.log(
			`Error attempting to enable full-screen mode: ${err.message}`
			);
		});
	} else {
		document.exitFullscreen().then(() => setIsFullScreen(false));
	}
	}
};

return (
	<Box
	bg={useColorModeValue("gray.100", "gray.700")}
	minHeight={`calc(100vh - ${headerHeight})`}
	m={-4}
	p={3}
	>
	<DashPageHeader
		btnAction={() => setOpenTestimonialDrawer()}
		titleIcon={<FiSettings />}
		btnTitle="Customize"
		breadcrumb={items}
	/>
	<DashPageTitle
		title="Our Testimonials"
		subTitle="What Other peoples thinks about your Organisations"
	/>
	<Box ref={tableRef}>
		<Flex
		display={"flex"}
		justifyContent={"space-between"}
		alignItems={"center"}
		gap={4}
		p={2}
		>
		<Box>
		<CustomInput placeholder="Search" name="search" />
		</Box>
		<ButtonGroup>
			<IconButton aria-label="" icon={<RiRefreshLine />} title="refresh" />
			<IconButton aria-label="" icon={<FiPlusCircle />} title="Add New" onClick={() => setOpenTestimonial(true)}/>
		</ButtonGroup>
		</Flex>
		<Box
		h={isFullScreen ? "calc(100vh - 40px)" : "73vh"}
		overflowX={isFullScreen ? "hidden" : "scroll"}
		mt={isFullScreen ? "20px" : "0"}
		>
		{testimonialLayout === "grid" ? (
			<TestimonialList />
		) : (
			<TestimonialTableList />
		)}
		<Pagination
			totalPages={20}
			onPageChange={(w) => {
			setCurrentPage(w);
			}}
			currentPage={currentPage}
		/>
		</Box>
	</Box>

	{/* custom modal */}
	<DashFormModel
		open={openTestimonial}
		close={() => setOpenTestimonial(false)}
		loading={false}
		title="Add Testimonial"
	>
		<TestimonialForm close={() => setOpenTestimonial(false)} />
	</DashFormModel>

	{/* custom drawer */}
	<CustomDrawer
		open={openTestimonialDrawer.open}
		close={setOpenTestimonialDrawer}
		title="Customize Testimonials"
	>
		<Button onClick={() => setOpenTestimonial(true)}>Add New</Button>
		<Button onClick={() => setTestimonialLayout()}>Change Layout</Button>
		<Button onClick={toggleFullScreen}>
		{document.fullscreenElement ? "Exit Fullscreen" : "Expand Table"}
		</Button>
	</CustomDrawer>
	</Box>
);
});

export default Testimonial;

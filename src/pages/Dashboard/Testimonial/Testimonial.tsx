import { Box, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import TestimonialForm from "./component/TestimonialForm";
import { observer } from "mobx-react-lite";
import TestimonialList from "./component/TestimonialList";
import { headerHeight } from "../../../config/constant/variable";
import DashPageHeader from "../../../config/component/common/DashPageHeader/DashPageHeader";
import Pagination from "../../../config/component/pagination/Pagination";
import DashPageTitle from "../../../config/component/common/DashPageTitle/DashPageTitle";
import { dashboard } from "../../../config/constant/routes";
import DashFormModel from "../../../config/component/common/DashFormModel/DashFormModel";

const Testimonial = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const [openTestimonial, setOpenTestimonial] = useState(false);

  const items = [
    { label: "Home", link: "/" },
    { label: "Dashboard", link: dashboard.home },
    { label: "Testimonials" },
  ];

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.700")}
      minHeight={`calc(100vh - ${headerHeight})`}
      m={-4}
      p={3}
    >
      <DashPageHeader
        btnAction={() => setOpenTestimonial(true)}
        breadcrumb={items}
      />
      <DashPageTitle
        title="Our Testimonials"
        subTitle="What Other peoples thinks about your Organisations"
      />
      <TestimonialList />
      <Pagination
        totalPages={20}
        onPageChange={(w) => {
          setCurrentPage(w);
        }}
        currentPage={currentPage}
      />
      <DashFormModel
        open={openTestimonial}
        close={() => setOpenTestimonial(false)}
        loading={false}
        title="Add Testimonial"
      >
        <TestimonialForm close={() => setOpenTestimonial(false)} />
      </DashFormModel>
    </Box>
  );
});

export default Testimonial;

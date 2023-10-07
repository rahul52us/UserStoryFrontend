import { Box, Grid } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import MainBlogContainer from "./component/mainBlogCotainer/MainBlogContainer";
import BlogRightContainer from "./component/mainBlogCotainer/component/BlogRightContainer";
import BlogLikeContainer from "./component/mainBlogCotainer/component/BLogLikeContainer";

const BlogIndex = observer(() => {
	return (
		<Box display="flex" justifyContent="center">
			<Grid
				gridTemplateColumns={{ lg: "0.6fr 1.9fr 0.9fr" }}
				position="relative"
				mt={3}
				w="100%"
			>
				<Box
					position="sticky"
					top={20}
					left={0}
					alignSelf="flex-start"
					justifyContent="center"
					display={{ base: "none", lg: "flex" }}
					style={{ marginTop: "80px" }}
				>
					<BlogLikeContainer />
				</Box>
				<Box w="100%" mt={{ base: 0, md: 2 }}>
					<MainBlogContainer />
				</Box>
				<Box position="sticky" top={5} right={0} alignSelf="flex-start">
					<BlogRightContainer />
				</Box>
			</Grid>
		</Box>
	);
});

export default BlogIndex;

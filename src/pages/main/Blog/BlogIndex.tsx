import { Box, Grid } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import MainBlogContainer from "./component/mainBlogCotainer/MainBlogContainer";
import BlogRightContainer from "./component/mainBlogCotainer/component/BlogRightContainer";
import BLogLikeContainer from "./component/mainBlogCotainer/component/BLogLikeContainer";

const BlogIndex = observer(() => {
  return (
    <Box display="flex" justifyContent="center">
      <Grid gridTemplateColumns={{ lg: "0.6fr 2fr 0.9fr" }} position="relative" mt={3}>
        <Box position="sticky" top={20} left={0} alignSelf="flex-start">
          <BLogLikeContainer />
        </Box>
        <MainBlogContainer />
        <Box position="sticky" top={20} right={0} alignSelf="flex-start">
          <BlogRightContainer />
        </Box>
      </Grid>
    </Box>
  );
});

export default BlogIndex;
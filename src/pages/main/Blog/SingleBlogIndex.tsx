import { useState } from "react";
import { useEffect } from "react";
import { Box, Grid } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import BlogLikeContainer from "./component/mainBlogCotainer/component/BlogLikeContainer";
import { useLocation } from "react-router-dom";
import BlogViewContainer from "./component/mainBlogCotainer/component/BlogViewContainer";
import store from "../../../store/store";
import { toJS } from "mobx";
import BlogSingleRight from "./component/mainBlogCotainer/component/BlogSingleRight";

const SingleBlogIndex = observer(() => {
  const [blogData, setBlogData] = useState(null);
  const {
    BlogStore: {
      getSingleBlogs,
      getComments,
      blogComments: { data },
    },
    auth: { openNotification },
  } = store;
  const { state } = useLocation();

  useEffect(() => {
    getSingleBlogs(state)
      .then((data) => {
        setBlogData(data);
      })
      .catch((err: any) => {
        openNotification({
          title: "GET Blogs Failed",
          message: err.message,
          type: "error",
        });
      });
  }, [openNotification, getSingleBlogs, state]);

  useEffect(() => {
    getComments(state)
      .then(() => {})
      .catch((err: any) => {
        openNotification({
          title: "GET Comments Failed",
          message: err.message,
          type: "error",
        });
      });
  }, [openNotification, getComments, state]);

  console.log(toJS(data));

  return (
    <Box display="flex" justifyContent="center">
      <Grid
        gridTemplateColumns={{ lg: "0.6fr 1.9fr 0.9fr" }}
        position="relative"
        width="100%"
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
        <Box w="100%" mt={{ base: 0, md: 5 }}>
          <BlogViewContainer item={blogData} />
        </Box>
        <Box position="sticky" top={20} right={0} alignSelf="flex-start">
          <BlogSingleRight />
        </Box>
      </Grid>
    </Box>
  );
});

export default SingleBlogIndex;

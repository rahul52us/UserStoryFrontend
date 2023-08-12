import {useState} from 'react'
import {useEffect} from 'react'
import { Box, Grid } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import BlogLikeContainer from "./component/mainBlogCotainer/component/BlogLikeContainer";
import { useLocation, useParams } from "react-router-dom";
import BlogViewContainer from "./component/mainBlogCotainer/component/BlogViewContainer";
import store from "../../../store/store";

const SingleBlogIndex = observer(() => {
  const [blogData, setBlogData] = useState(null)
  const {BlogStore : {getSingleBlogs}, auth : {openNotification}} =  store;
  const {blogTitle} = useParams()
  const {state} = useLocation()

  console.log(state)
  useEffect(() => {
    getSingleBlogs(state)
      .then((data) => {
        setBlogData(data)
      })
      .catch((err: any) => {
        openNotification({
          title: "GET Blogs Failed",
          message: err.message,
          type: "error",
        });
      });
  }, [openNotification, getSingleBlogs, state]);


  console.log(blogData)

  return (
    <Box display="flex" justifyContent="center">
      <Grid gridTemplateColumns={{ lg: "0.6fr 2fr 0.9fr" }} position="relative" mt={3}>
        <Box position="sticky" top={20} left={0} alignSelf="flex-start" justifyContent="center" display={{base : 'none', lg :'flex'}} style={{marginTop:'80px'}}>
          <BlogLikeContainer />
        </Box>
        <BlogViewContainer item={blogData} />
        <Box position="sticky" top={20} right={0} alignSelf="flex-start">
          {blogTitle?.split('-').join(' ')}
        </Box>
      </Grid>
    </Box>
  );
});

export default SingleBlogIndex;
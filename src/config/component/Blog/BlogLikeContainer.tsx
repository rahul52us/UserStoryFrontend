import HeartLike from "../../assets/icon_images/heart-like.svg";
import UnicornLike from "../../assets/icon_images/unicorn-like.svg";
import HandLike from "../../assets/icon_images/hand-like.svg";
import ShockLike from "../../assets/icon_images/shock-like.svg";
import FireLike from "../../assets/icon_images/fire-like.svg";
import { Box } from "@chakra-ui/react";

const BlogLikeContainer = () => {
  return (
    <Box display="flex" gap={8}>
      <span style={{display:'flex',alignItems:'center'}}><img src={HeartLike} alt="" /><span style={{marginLeft:'5px'}}>20</span></span>
      <span style={{display:'flex',alignItems:'center'}}><img src={HandLike} alt="" /><span style={{marginLeft:'5px'}}>20</span></span>
      <span style={{display:'flex',alignItems:'center'}}><img src={ShockLike} alt="" /><span style={{marginLeft:'5px'}}>20</span></span>
      <span style={{display:'flex',alignItems:'center'}}><img src={FireLike} alt="" /><span style={{marginLeft:'5px'}}>20</span></span>
      <span style={{display:'flex',alignItems:'center'}}><img src={UnicornLike} alt="" /><span style={{marginLeft:'5px'}}>20</span></span>
    </Box>
  );
};

export default BlogLikeContainer;

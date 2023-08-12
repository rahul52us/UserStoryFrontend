import { observer } from "mobx-react-lite";
import HeartLike from "../../../../../../config/assets/icon_images/heart-like.svg";
import UnicornLike from "../../../../../../config/assets/icon_images/unicorn-like.svg";
import HandLike from "../../../../../../config/assets/icon_images/hand-like.svg";
import ShockLike from "../../../../../../config/assets/icon_images/shock-like.svg";
import FireLike from "../../../../../../config/assets/icon_images/fire-like.svg";
import { Box } from "@chakra-ui/react";

const BlogLikeContainer = observer(() => {
  return (
    <Box display="flex" flexDirection="column" gap={8} cursor="pointer">
      <span style={{display:'flex',alignItems:'center'}}><img src={HeartLike} alt="" /><span style={{marginLeft:'5px'}}>20</span></span>
      <span style={{display:'flex',alignItems:'center'}}><img src={HandLike} alt="" /><span style={{marginLeft:'5px'}}>20</span></span>
      <span style={{display:'flex',alignItems:'center'}}><img src={ShockLike} alt="" /><span style={{marginLeft:'5px'}}>20</span></span>
      <span style={{display:'flex',alignItems:'center'}}><img src={FireLike} alt="" /><span style={{marginLeft:'5px'}}>20</span></span>
      <span style={{display:'flex',alignItems:'center'}}><img src={UnicornLike} alt="" /><span style={{marginLeft:'5px'}}>20</span></span>
    </Box>
  );
});

export default BlogLikeContainer;
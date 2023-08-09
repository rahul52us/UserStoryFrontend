import { Box, Card, Heading, Image } from "@chakra-ui/react";
import BlogLikeContainer from "../../../../../../config/component/Blog/BlogLikeContainer";
import BlogViewDetail from "./BlogViewDetail";
import BlogTags from "./BlogTags";

const BlogViewContainer = ({ item }: any) => {
  return (
    <Card mb={10}>
      {item.coverImage && (
        <Box>
          <Image
            width="100%"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--8tdg5WAT--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1puue97fpusutvg5rw7w.png"
          />
        </Box>
      )}
      <Box p={{ base: 1, sm: 4, lg: 8 }} pt={{ base: 3, lg: 5 }}>
        <BlogViewDetail item={item} />
        <BlogLikeContainer />
        <Heading
          mt={5}
          fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
          fontWeight={800}
          lineHeight={1.4}
        >
          {item.title}
        </Heading>
        <BlogTags item={item}/>
        <Box className="preview_blog_container" mt={3}>
          <div dangerouslySetInnerHTML={{ __html: item?.content }} />
        </Box>
      </Box>
    </Card>
  );
};

export default BlogViewContainer;

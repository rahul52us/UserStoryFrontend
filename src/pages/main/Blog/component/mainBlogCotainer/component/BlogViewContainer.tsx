import { Box, Card, Heading, Image } from "@chakra-ui/react";
import BlogViewDetail from "./BlogViewDetail";
import BlogTags from "./BlogTags";
import BlogReaction from "./BlogReaction";
import { useNavigate } from "react-router-dom";
import BlogCommentIndex from "../../BlogComment/BlogCommentIndex";

const BlogViewContainer = ({ item, multi }: any) => {
  const navigate = useNavigate();

  return (
    <Card mb={5} p={0} width="100%">
      {item?.coverImage ? (
        <Box>
          <Image width="100%" src={item.coverImage} />
        </Box>
      ) : null}
      <Box p={2}>
        <BlogViewDetail item={item} />
        <Heading
          mt={3}
          fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
          fontWeight={800}
          lineHeight={1.4}
          _hover={{
            color: multi && "blue.500",
            textDecoration: multi && "underline",
            cursor: "pointer",
          }}
          onClick={() => {
            if (multi) {
              navigate(`/blog/${item?.title.split(" ").join("-")}`, {
                state: item?._id,
              });
            }
          }}
        >
          {item?.title}
        </Heading>
        <BlogTags item={item} />
        <BlogReaction item={item} multi={multi} />
        {!multi && (
          <Box className="preview_blog_container" mt={3} p={2}>
            <div dangerouslySetInnerHTML={{ __html: item?.content }} />
          </Box>
        )}
      </Box>
      {!multi && item && <BlogCommentIndex item={item} />}
    </Card>
  );
};
export default BlogViewContainer;

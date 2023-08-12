import { Box, Card, Heading, Image } from "@chakra-ui/react";
import BlogViewDetail from "./BlogViewDetail";
import BlogTags from "./BlogTags";
import BlogReaction from "./BlogReaction";
import { useNavigate } from "react-router-dom";

const BlogViewContainer = ({ item, multi }: any) => {
  const navigate = useNavigate();

  return (
    <Card mb={5} p={0}>
      {item?.coverImage && (
        <Box>
          <Image width="100%" src={item.coverImage} />
        </Box>
      )}
      <Box p={{ base: 1, sm: 4, lg: 8 }} pt={{ base: 3, lg: 5 }}>
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
          <Box className="preview_blog_container" mt={3}>
            <div dangerouslySetInnerHTML={{ __html: item?.content }} />
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default BlogViewContainer;

import { Box, Flex, Text } from "@chakra-ui/react";

const BlogTags = ({ item }: any) => {
  return item?.tags?.length ? (
    <Box mt={4} mb={4}>
      <Flex gap={5}>
        {item?.tags?.map((tag: string, index: number) => {
          return (
            <Text
              key={index}
              border={"1px solid gray"}
              p={0.6}
              pl={3}
              pr={3}
              borderRadius={5}
              cursor="pointer"
              color={"gray.600"}
            >
              {tag}
            </Text>
          );
        })}
      </Flex>
    </Box>
  ) : null;
};

export default BlogTags;

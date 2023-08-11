import { Card, Flex, Heading } from "@chakra-ui/react";

const BlogRightContainer = () => {
  return (
    <Flex justifyContent="center" mb={10}>
      <Card w="90%" h={400}>
        <Heading fontSize="sm">Here will other details</Heading>
      </Card>
    </Flex>
  );
};

export default BlogRightContainer;
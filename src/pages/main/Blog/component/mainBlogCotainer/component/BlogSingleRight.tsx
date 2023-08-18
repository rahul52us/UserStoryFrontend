import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

const BlogSingleRight = observer(({ item }: any) => {
  return (
    <Flex justifyContent="center" mb={10}>
      <Box
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        w={{ base: "95%", lg: "90%" }}
      >
        <Box bgColor="#ff6575" p={6} borderRadius="lg 0 0 0">
          <Flex justifyContent="center" alignItems="center" mb={4}>
            <Avatar size="xl" src={item?.createdBy?.pic} borderColor="white" borderWidth={4} />
          </Flex>
          <Text
            fontWeight="bold"
            fontSize="xl"
            color="white"
            textAlign="center"
          >
            {item?.createdBy?.name}
          </Text>
          <Text mt={1} color="white" fontSize="sm" textAlign="center">
            {item?.createdBy?.bio && item?.createdBy?.bio}
          </Text>
          <Text mt={2} color="white" fontSize="sm" textAlign="center">
            {item?.createdBy?.position?.length && item?.createdBy?.position[0]}
          </Text>
        </Box>
        <Box p={4} bgColor="white" borderRadius="0 0 lg lg">
          <Button
            width="100%"
            bgColor="#ff6575"
            _hover={{ backgroundColor: "#ff6575" }}
            color="white"
            borderRadius="md"
            fontSize="sm"
            fontWeight="bold"
          >
            Add New Course
          </Button>
        </Box>
      </Box>
    </Flex>
  );
});

export default BlogSingleRight;
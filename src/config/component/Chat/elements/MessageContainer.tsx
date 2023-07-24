import {
  Avatar,
  Box,
  Text,
  Flex,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import MessageDotOption from "./MessageDotOption";

const MessageContainer = ({ user }: any) => {
  return (
    <Flex
      justifyContent={user.me ? "flex-end" : "flex-start"}
      alignItems="center"
      marginBottom={4}
      position="relative"
    >
      <Avatar
        name={user.name}
        src={user.avatar}
        size={["xs", "md"]}
        marginRight={2}
      />
      <Box
        backgroundColor={user.me ? "green.200" : "#F0F2F5"}
        borderRadius="lg"
        p={3}
        maxWidth="70%"
        width="100%"
        position="relative"
      >
        <Flex alignItems="flex-start" marginBottom={1}>
          <Box flexDirection={"column"}>
            <Text
              fontWeight="bold"
              marginRight={2}
              fontSize={11}
              color={useColorModeValue("gray.500", "gray.600")}
            >
              {user.name}
            </Text>
            <Text fontSize={8} color="gray.500">
              {user.createdAt}
            </Text>
          </Box>
          <Spacer />
          <Box position="relative">
            <MessageDotOption />
          </Box>
        </Flex>
        <Text fontSize="sm" color="gray.700" mt={-1}>
          {user.message}
        </Text>
      </Box>
    </Flex>
  );
};

export default MessageContainer;

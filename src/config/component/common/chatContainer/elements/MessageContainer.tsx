import {
  Avatar,
  Box,
  Text,
  Flex,
  IconButton,
  Spacer,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { FaEllipsisH } from "react-icons/fa";

const MessageContainer = ({ user }: any) => {
  return (
    <Flex alignItems="center" marginBottom={4} position="relative">
      <Avatar
        name={user.name}
        src={user.avatar}
        size={["xs", "md"]}
        marginRight={2}
      />
      <Box
        backgroundColor="#F0F2F5"
        borderRadius="lg"
        p={3}
        maxWidth="70%"
        width="100%"
        position="relative"
        _after={{
          content: "''",
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 0,
          height: 0,
          border: "8px solid transparent",
          borderTopColor: "#F0F2F5",
          borderRightColor: "#F0F2F5",
        }}
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
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<FaEllipsisH />}
                size="sm"
                variant="ghost"
                aria-label="Options"
              />
              <MenuList
                position="absolute"
                right={0}
                top="100%"
                backgroundColor="white"
                boxShadow="md"
                zIndex={9999}
              >
                <MenuItem>Delete Message</MenuItem>
                <MenuItem>Reply Message</MenuItem>
                <MenuDivider />
                <MenuItem>Report Message</MenuItem>
              </MenuList>
            </Menu>
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

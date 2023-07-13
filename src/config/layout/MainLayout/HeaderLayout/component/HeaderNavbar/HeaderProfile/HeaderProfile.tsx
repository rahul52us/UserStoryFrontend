import {
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import store from "../../../../../../../store/store";

const HeaderProfile = observer(() => {
  const {
    auth: { user },
  } = store;
  return (
    <Menu closeOnSelect={false} placement="bottom-end">
      <MenuButton
        as={Flex}
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        _hover={{ opacity: 0.8 }}
        fontSize="xl"
      >
        <Avatar
          size={"sm"}
          borderRadius={10}
          name={user?.name}
          src="https://example.com/avatar.jpg"
        />
      </MenuButton>
      <MenuList
        bg="white"
        minWidth="180px"
        boxShadow="md"
        py={1}
        borderRadius="md"
      >
        <MenuItem _hover={{ bg: "gray.100" }}>Profile Settings</MenuItem>
        <MenuItem _hover={{ bg: "gray.100" }}>Change Password</MenuItem>
        <MenuItem _hover={{ bg: "gray.100" }}>Customize Theme</MenuItem>
        <MenuItem _hover={{ bg: "gray.100" }}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
});

export default HeaderProfile;

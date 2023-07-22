import { Avatar, Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import store from "../../../../../../../store/store";

const HeaderProfile = observer(() => {
  const { auth: { user, doLogout }, themeStore: { setOpenThemeDrawer } } = store;

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
        <Avatar src={user.pic} size="sm" borderRadius={10} name={user.name} />
      </MenuButton>
      <MenuList
        minWidth="180px"
        boxShadow="md"
        py={1}
        borderRadius="md"
        zIndex={10}
      >
        <MenuItem
          px={4}
          py={2}
          fontSize="sm"
          fontWeight="medium"
        >
          Profile Settings
        </MenuItem>
        <MenuItem
          px={4}
          py={2}
          fontSize="sm"
          fontWeight="medium"
        >
          Change Password
        </MenuItem>
        <MenuItem
          px={4}
          py={2}
          fontSize="sm"
          fontWeight="medium"
          onClick={() => setOpenThemeDrawer()}
        >
          Customize Theme
        </MenuItem>
        <MenuItem
          px={4}
          py={2}
          fontSize="sm"
          fontWeight="medium"
          color="red.500"
          onClick={() => doLogout()}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
});

export default HeaderProfile;

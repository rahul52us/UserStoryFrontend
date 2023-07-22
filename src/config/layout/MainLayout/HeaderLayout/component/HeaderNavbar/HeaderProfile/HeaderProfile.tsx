import {
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import store from "../../../../../../../store/store";
import { useNavigate } from "react-router-dom";
import { authentication, main } from "../../../../../../constant/routes";

const HeaderProfile = observer(() => {
  const {
    auth: { user, doLogout },
    themeStore: { setOpenThemeDrawer },
  } = store;
  const navigate = useNavigate();

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
        <Avatar src={user?.pic} size="sm" borderRadius={10} name={user?.name} />
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
          onClick={() => {
            localStorage.setItem("profile_current_active_tab", "0");
            navigate(main.profile);
          }}
        >
          Profile Settings
        </MenuItem>
        <MenuItem
          px={4}
          py={2}
          fontSize="sm"
          fontWeight="medium"
          onClick={() => {
            localStorage.setItem("profile_current_active_tab", "1");
            navigate(main.changePassword);
          }}
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
          onClick={() => {
            doLogout();
            navigate(authentication.login);
          }}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
});

export default HeaderProfile;

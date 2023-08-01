import { Flex, useMediaQuery } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { observer } from "mobx-react-lite";
import HeaderProfile from "./HeaderProfile/HeaderProfile";
import HeaderNotification from "./HeaderNotification/HeaderNotification";
import HeaderThemeSwitch from "./HeaderThemeSwitch/HeaderThemeSwitch";
import HeaderLanguageSwitch from "./HeaderLanguageSwitch/HeaderLanguageSwitch";
import HeaderChatMessage from "./HeaderChatMessage";
import store from "../../../../../../store/store";

const HeaderNavbar = observer(() => {
  const {layout : {MobileSidebarFun}} = store
  const [isLargerThan1020] = useMediaQuery("(min-width: 1020px)");

  return (
    <Flex
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      width={isLargerThan1020 ? "22%" : "10%"}
    >
      {isLargerThan1020 ? (
        <>
          <HeaderLanguageSwitch />
          <HeaderThemeSwitch />
          <HeaderChatMessage />
          <HeaderNotification />
          <HeaderProfile />
        </>
      ) : (
        <FaBars cursor="pointer" onClick={() => MobileSidebarFun(true)} />
      )}
    </Flex>
  );
});

export default HeaderNavbar;

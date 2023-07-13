import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import {
  LargeScreenHeaderHeight,
  SmallScreenHeaderHeight,
} from "../../../constant/variable";
import { useMediaQuery } from "@chakra-ui/react";
import HeaderNavbar from "./component/HeaderNavbar/HeaderNavbar";
import HeaderLogo from "./component/Logo/HeaderLogo";

const HeaderLayout = () => {
  const [isLargerThan1020] = useMediaQuery("(min-width: 1020px)");
  return (
    <HeaderingContainer
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      height={
        isLargerThan1020 ? LargeScreenHeaderHeight : SmallScreenHeaderHeight
      }
      position={"fixed"}
      left={0}
      right={0}
      top={0}
      zIndex={999}
    >
      <Box width={isLargerThan1020 ? "60%" : "90%"}>
        <HeaderLogo />
      </Box>
      <HeaderNavbar />
    </HeaderingContainer>
  );
};

export default HeaderLayout;

const HeaderingContainer = styled(Flex)`
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  position:fixed,
  left:0,
  right:0,
  top:0
`;

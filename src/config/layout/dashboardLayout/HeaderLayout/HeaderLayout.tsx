import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { useMediaQuery } from "@chakra-ui/react";
import HeaderNavbar from "./component/HeaderNavbar/HeaderNavbar";
import HeaderLogo from "./component/Logo/HeaderLogo";
import { headerHeight, headerPadding } from "../../../constant/variable";
import { observer } from "mobx-react-lite";

const HeaderLayout = observer(() => {
  const [isLargerThan1020] = useMediaQuery("(min-width: 1020px)");

  return (
    <HeaderingContainer
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      height={headerHeight}
      padding={headerPadding}
    >
      <Box width={isLargerThan1020 ? "40%" : "95%"}>
        <HeaderLogo />
      </Box>
      <HeaderNavbar />
    </HeaderingContainer>
  );
});

export default HeaderLayout;

const HeaderingContainer = styled(Flex)`
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

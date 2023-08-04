import { Box, Image } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import Logo from "../../../../../assets/icon_images/Logo.jpg";

const HeaderLogo = observer(() => {
  return (
    <Box p={4}>
      <Image src={Logo} alt="" width={16} height={16} borderRadius={10} />
    </Box>
  );
});

export default HeaderLogo;

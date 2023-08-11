import { Box, Heading} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
// import Logo from "../../../../../assets/icon_images/Logo.jpg";

const HeaderLogo = observer(() => {
  return (
    <Box p={4}>
      {/* <Image src={Logo} alt="" width={16} height={16} borderRadius={10} /> */}
      <Heading color="blue.400">LOGO</Heading>
    </Box>
  );
});

export default HeaderLogo;

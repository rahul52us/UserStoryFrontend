import { Box, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

const HeaderLogo = observer(() => {
  return (
    <Box p={4}>
      <Text>Logo</Text>
    </Box>
  );
});

export default HeaderLogo;

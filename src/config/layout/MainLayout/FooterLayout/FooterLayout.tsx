import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";

const FooterLayout = () => {
  return (
    <Flex justify={"space-around"} h={320} borderTop={"1px solid gray"}>
      <Box>
        <Flex flexDirection={"column"}>
          <Image
            src="https://rainbowit.net/html/histudy/assets/images/logo/logo.png"
            objectFit={"contain"}
            width={"120px"}
            height={"60px"}
          />
          <Text color={useColorModeValue('gray.500','gray.300')} fontSize={'lg'}>
            We re always in search for talented and motivated people. Don’t be
            shy introduce yourself!
          </Text>
        </Flex>
      </Box>
      <Box>Left-right</Box>
      <Box>right-right</Box>
      <Box>Right-Right</Box>
    </Flex>
  );
};

export default FooterLayout;

import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcAbout, FcManager, FcAssistant } from "react-icons/fc";
import LinkText from "../../../../../config/component/LinkText/LinkText";
import { FaMicroblog } from "react-icons/fa";

const CardBox = ({ heading, description, icon }: any) => {
  return (
    <Box
      maxW={{ base: "full", md: "100%" }}
      w={"full"}
      borderRadius="lg"
      overflow="hidden"
      p={5}
      boxShadow="rgb(0 0 0 / 20%) 0px 0px 11px"
      cursor='pointer'
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={4} mb={2} fontSize={"sm"} fontWeight={500}>
            {description}
          </Text>
        </Box>
        <LinkText text="Learn more" />
      </Stack>
    </Box>
  );
};

const HomeExtraResources = () => {
  return (
    <Box mt={14} mb={6}>
      <Heading fontSize={"5xl"}>Keep learning with free resources</Heading>
      <Grid
        gridTemplateColumns={{
          base: "1fr",
          sm: "1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr 1fr",
        }}
        mt={12}
        mb={10}
        gap={4}
      >
        <CardBox
          heading={"Heading"}
          icon={<Icon as={FcManager} w={10} h={10} />}
          description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
          href={"#"}
        />
        <CardBox
          heading={"Testimonials"}
          icon={<Icon as={FcAbout} w={10} h={10} />}
          description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
          href={"#"}
        />
        <CardBox
          heading={"Assistence"}
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
          href={"#"}
        />
        <CardBox
          heading={"Blog"}
          icon={<Icon as={FaMicroblog} w={10} h={10} />}
          description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
          href={"#"}
        />
      </Grid>
    </Box>
  );
};

export default HomeExtraResources;

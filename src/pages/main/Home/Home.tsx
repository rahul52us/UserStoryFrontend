import { Heading, Stack, Text, Button, Container } from "@chakra-ui/react";
import HomeServices from "./component/HomeServices/HomeServices";
import CaptionCarousel from "../../../config/component/carousel/Carousel";
import HomeExtraResources from "./component/HomeExtraResources/HomeExtraResources";

export default function CallToActionWithIllustration() {
  return (
    <>
     <CaptionCarousel />
      <Container maxW={'6xl'}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 15, md: 30 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          colorScheme="black"
          color="black.500"
        >
          Meeting scheduling{" "}
          <Text as={"span"} color={"orange.400"}>
            made easy
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Never miss a meeting. Never be late for one too. Keep track of your
          meetings and receive smart reminders in appropriate times. Read your
          smart “Daily Agenda” every morning.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
          >
            Get started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
        </Stack>
      </Stack>
      <HomeServices />
      <HomeExtraResources />
      </Container>
    </>
  );
}
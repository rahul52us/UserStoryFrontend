import { Box, Container, Grid, Heading } from "@chakra-ui/react";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import styled from "styled-components";
import FaqQuestions from "./FaqQuestions";

const BoxStyleFirst = styled(Box)`
  @media only screen and (min-device-width: 800px) and (max-device-width: 1024px) {
    svg {
      width: 25rem !important;
      height: 25.6rem !important;
    }
  }
`;

const Faq = () => {
  return (
    <Container maxW={"7xl"} my={{ base: 2, md: 14 }}>
      <Heading textAlign="center" fontSize={"4xl"}>
        Frequently Asked Questions (FAQs)
      </Heading>
      <Grid templateColumns={{ md: "1fr 2fr" }} gap={6} mt={8}>
        <BoxStyleFirst
          mx="auto"
          width={{
            xs: "25rem",
            lg: "35rem",
          }}
          height={{
            xs: "25.6rem",
            lg: "35.9rem",
          }}
        >
          <Player autoplay loop src="/img/faq.json">
            <Controls visible={false} />
          </Player>
        </BoxStyleFirst>
        <Box>
          <FaqQuestions />
        </Box>
      </Grid>
    </Container>
  );
};

export default Faq;

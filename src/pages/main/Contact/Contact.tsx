import { Box, Container, Text, Grid } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import styled from "styled-components";

import { MdLocationPin } from "react-icons/md";
import ContactForm from "./component/ContactForm";

const BoxStyleFirst = styled(Box)`
  @media only screen and (min-device-width: 800px) and (max-device-width: 1024px) {
    svg {
      width: 25rem !important;
      height: 25.6rem !important;
    }
  }
`;

const Contact = observer(() => {
  return (
    <Container maxW={"7xl"} my={{ base: 2, md: 14 }}>
      <Grid
        mt={{ base: 2, md: 6 }}
        templateColumns={{ md: "1fr 1fr" }}
        gap={10}
        alignItems="center"
      >
        <Box order={{ base: 1, md: 0 }}>
          <ContactForm />
        </Box>
        <Box>
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
            <Player autoplay loop src="/img/contactus.json">
              <Controls visible={false} />
            </Player>
          </BoxStyleFirst>
          <Grid templateColumns="3rem 1fr" alignItems="center">
            <Box fontSize="2rem" color={useColorModeValue("blue.500", "white")}>
              <MdLocationPin />
            </Box>
            <Text>
              2000+ Our students are subscribe Around the World. Don’t be shy
              introduce yourself!
            </Text>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
});

export default Contact;

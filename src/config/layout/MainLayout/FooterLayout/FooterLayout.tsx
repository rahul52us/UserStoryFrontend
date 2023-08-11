import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import LinkText from "../../../component/LinkText/LinkText";
import FooterBottom from "./element/FooterBottom";
import SocialMediaLink from "../../../component/SocialMediaLinkContainer/SocialMediaLink";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { dashboard, main } from "../../../constant/routes";

const FooterLayout = observer(() => {
  const navigate = useNavigate();
  return (
    <>
      <Divider />
      <Box
        pl={{ base: 3, sm: 5, md: 10 }}
        pr={{ base: 3, sm: 5, md: 10 }}
        pt={{ base: 3, sm: 5, md: 10 }}
        bg={useColorModeValue("teal.50", "whiteAlpha.700")}
      >
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr",
            xl: "1.5fr 0.8fr 0.8fr 1.4fr",
          }}
          gap={4}
          columnGap={10}
        >
          <Box>
            <Flex flexDirection={"column"}>
              <Image
                src="https://rainbowit.net/html/histudy/assets/images/logo/logo.png"
                objectFit={"contain"}
                width={"120px"}
                height={"60px"}
              />
              <Text
                color={useColorModeValue("gray.500", "gray.300")}
                fontSize={"md"}
              >
                We re always in search for talented and motivated people. Don’t
                be shy introduce yourself!
              </Text>
            </Flex>
            <Box mt={5}>
              <SocialMediaLink />
            </Box>
            <Box mt={5}>
              <Button
                borderRadius={10}
                rightIcon={
                  <FaArrowCircleRight style={{ marginLeft: "10px" }} />
                }
              >
                Contact Us
              </Button>
            </Box>
          </Box>
          <Box>
            <Heading fontSize={{ base: "xl" }}>Useful Links</Heading>
            <Box mt={5} fontSize={{ base: 12, sm: 15 }}>
              <Box mt={2}>
                <LinkText text="Home" clickEvent={() => navigate(main.home)} />
              </Box>
              <Box mt={2}>
                <LinkText
                  text="About"
                  clickEvent={() => navigate(main.about)}
                />
              </Box>
              <Box mt={2}>
                <LinkText
                  text="Profile"
                  clickEvent={() => navigate(main.profile)}
                />
              </Box>
              <Box mt={2}>
                <LinkText
                  text="Dashboard"
                  clickEvent={() => navigate(dashboard.home)}
                />
              </Box>
              <Box mt={2}>
                <LinkText
                  text="Courses"
                  clickEvent={() => navigate(main.courses)}
                />
              </Box>
              <Box mt={2}>
                <LinkText
                  text="Testimonials"
                  clickEvent={() => navigate(main.testimonial)}
                />
              </Box>
              <Box mt={2}>
                <LinkText
                  text="Videos"
                  clickEvent={() => navigate(main.video)}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Heading fontSize={{ base: "xl" }}>Our Company</Heading>
            <Box mt={5} fontSize={{ base: 12, sm: 15 }}>
              <Box mt={2}>
                <LinkText text="About" clickEvent={() => navigate("/about")} />
              </Box>
              <Box mt={2}>
                <LinkText text="Events" />
              </Box>
              <Box mt={2}>
                <LinkText text="Blogs" clickEvent={() => navigate(main.blog)}/>
              </Box>
              <Box mt={2}>
                <LinkText
                  text="Testimonials"
                  clickEvent={() => navigate(main.testimonial)}
                />
              </Box>
              <Box mt={2}>
                <LinkText
                  text="Contact Us"
                  clickEvent={() => navigate(main.contact)}
                />
              </Box>
              <Box mt={2}>
                <LinkText text="Faq" clickEvent={() => navigate(main.faq)} />
              </Box>
              <Box mt={2}>
                <LinkText text="Privacy Policy" />
              </Box>
            </Box>
          </Box>
          <Box>
            <Heading fontSize={{ base: "xl" }}>Get Contact</Heading>
            <Box mt={5} fontSize={{ base: 12, sm: 15 }}>
              <Box mt={2} display={"flex"} alignItems={"center"}>
                <Text mr={2}>Phone : </Text>
                <LinkText
                  text="+ 9977053447"
                  clickEvent={() => alert("rahul")}
                />
              </Box>
              <Box mt={2} display={"flex"} alignItems={"center"}>
                <Text mr={2}>E-mail : </Text>
                <LinkText
                  text="rahul52us@gmail.com"
                  clickEvent={() => alert("rahlu")}
                />
              </Box>
              <Box mt={4}>
                <LinkText
                  text="News Letter"
                  clickEvent={() => alert("rahlu")}
                />
                <Text
                  color={useColorModeValue("gray.500", "gray.300")}
                  fontSize={"sm"}
                  mt={3}
                >
                  2000+ Our students are subscribe Around the World. Don’t be
                  shy introduce yourself!
                </Text>
              </Box>
            </Box>
          </Box>
        </Grid>
        <FooterBottom />
      </Box>
    </>
  );
});

export default FooterLayout;

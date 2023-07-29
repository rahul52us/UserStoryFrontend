import { Flex } from "@chakra-ui/react";
import SocialMediaLinkLogo from "./element/SocialMediaLinkLogo";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialMediaLink = () => {
  return (
    <Flex alignItems={"center"} gap={5}>
      <SocialMediaLinkLogo
        title="Facebook"
        icon={<FaFacebook />}
        hoverColor="blue.500"
        color="white"
      />
      <SocialMediaLinkLogo
        title="Instagram"
        icon={<FaInstagram />}
        hoverColor="blue.500"
        color="white"
      />
      <SocialMediaLinkLogo
        title="LinkedIn"
        icon={<FaLinkedin />}
        hoverColor="blue.500"
        color="white"
      />
      <SocialMediaLinkLogo
        title="Twitter"
        icon={<FaTwitter />}
        hoverColor="blue.500"
        color="white"
      />
    </Flex>
  );
};

export default SocialMediaLink;

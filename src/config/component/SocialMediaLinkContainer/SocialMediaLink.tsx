import { Flex } from "@chakra-ui/react"
import SocialMediaLinkLogo from "./element/SocialMediaLinkLogo"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const SocialMediaLink = () => {
  return (
    <Flex display={'flex'} alignItems={'center'} justifyContent={'space-around'} alignContent={'center'}>
    <SocialMediaLinkLogo title="Facebook" icon={<FaFacebook />} hoverColor="blue" color="white" />
    <SocialMediaLinkLogo title="Instagram" icon={<FaInstagram />} hoverColor="blue" color="white"/>
    <SocialMediaLinkLogo title="LinkedIn" icon={<FaLinkedin />} hoverColor="blue" color="white"/>
    <SocialMediaLinkLogo title="Twitter" icon={<FaTwitter />} hoverColor="blue" color="white"/>
    </Flex>
  )
}

export default SocialMediaLink
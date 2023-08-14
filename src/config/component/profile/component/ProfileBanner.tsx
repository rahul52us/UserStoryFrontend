import { Box, Heading } from "@chakra-ui/react";

const ProfileBanner = () => {
  return (
    <Box bgColor="blue.300" h={180} display="none">
      <Heading textAlign="center" fontSize="2xl">Profile</Heading>
    </Box>
  )
}

export default ProfileBanner;
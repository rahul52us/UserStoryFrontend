import { Avatar, Box, Text, Flex } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import store from "../../../../store/store";

const ProfileBanner = observer(() => {
  const {
    auth: { user },
  } = store;
  return (
    <Box>
      <Flex
        direction="column-reverse"
        bgGradient="linear-gradient(135deg, #AEE3FF, #72C7FF)"
        h={180}
      />
      <Flex alignItems="center" justifyContent="center">
        <Box
          width={{ base: "93%", md: "70%" }}
          borderRadius={10}
          mt={-20}
          bg={"blue.400"}
          display="flex"
          p={5}
        >
          <Avatar
            src="https://rainbowit.net/html/histudy/assets/images/team/avatar-2.jpg"
            name={user?.name}
            w={36}
            h={36}
          />
          <Box ml={5} mt={5}>
            <Text fontSize="2xl" fontWeight={600} cursor="pointer">
              {user?.name}
            </Text>
            <Text textAlign="start" color="gray.700" fontSize={14}>
              This is a small description for all users and it's working now
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
});

export default ProfileBanner;

import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";

const ProfileTabAvatar = ({profileData} : any) => {
  return (
    <Box border="1px solid #e9ecef" borderRadius={10} h={320}>
      <Box
        justifyContent="center"
        style={{ height: "120px" }}
        bgColor="#ff6575"
        position="relative"
        borderRadius={"10px 10px 0px 0px"}
      >
        <Flex justifyContent="center" alignItems="flex-end" height="100%">
          <Avatar
            style={{ marginBottom: "-45px", height: "120px", width: "120px" }}
            src={profileData?.pic}
          />
        </Flex>
        <Box textAlign="center" style={{ marginTop: "45px" }}>
          <Text
            fontWeight="bold"
            fontSize="2xl"
            _hover={{ color: "blue" }}
            cursor="pointer"
          >
            {profileData?.name}
          </Text>
          <Text color="gray.600" cursor="pointer">
            Student
          </Text>
        </Box>
        <Box display="flex" justifyContent="center">
          <Button
            width="85%"
            mt={8}
            bgColor="#ff6575"
            _hover={{ backgroundColor: "#ff6575" }}
            color="white"
            cursor="pointer"
          >
            Add New Course
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileTabAvatar;

import React from "react";
import { Box, Divider, Grid, Heading, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import moment from "moment";

const ProfileView = observer(({ profileData }: any) => {
  return (
    <Box p={6} bg="white" boxShadow="md" borderRadius="md">
      <Heading color="brand.500" fontSize="xl" mb={2}>
        Personal Information
      </Heading>
      <Divider my={2} />
      <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap={4}>
        <InfoCard label="Name" value={`${profileData?.firstName} ${profileData?.lastName}`} />
        <InfoCard label="Username" value={profileData?.username} />
        <InfoCard label="Joined On" value={moment(profileData?.created_At).format('DD-MM-YYYY')} />
        <InfoCard label="Email" value={profileData?.username} />
        <InfoCard label="NickName" value={profileData?.nickName} />
        <InfoCard label="Father's Name" value={profileData?.fatherName} />
        <InfoCard label="Mother's Name" value={profileData?.motherName} />
        <InfoCard label="Mobile No." value={profileData?.mobileNo || "-"} />
        <InfoCard label="Emergency No." value={profileData?.emergencyNo} />
      </Grid>
      <Grid mt={4}>
        <InfoCard label="Bio" value={profileData?.bio} />
      </Grid>
      <Divider my={4} />
      <Box>
        <Heading color="brand.500" fontSize="xl" mb={4}>
          Address Information
        </Heading>
        {profileData?.addressInfo?.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <AddressCard {...item} />
            {index < profileData.addressInfo.length - 1 && <Divider my={4} />}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
});

const InfoCard = ({ label, value }: { label: string; value: string }) => (
  <Box p={4} bg="gray.100" borderRadius="md" shadow="md">
    <Text fontSize="sm" fontWeight="bold" color="gray.600">
      {label}
    </Text>
    <Text mt={1} fontSize="md" color="gray.800">
      {value}
    </Text>
  </Box>
);

const AddressCard = ({ address, country, state, city, pinCode }: any) => (
  <Box p={4} borderRadius="md" shadow="md">
    <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4}>
      <InfoCard label="Address" value={address} />
      <InfoCard label="Country" value={country} />
      <InfoCard label="State" value={state} />
      <InfoCard label="City" value={city} />
      <InfoCard label="PinCode" value={pinCode} />
    </Grid>
  </Box>
);

export default ProfileView;

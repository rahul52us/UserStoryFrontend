import { Box, Divider, Grid, Heading, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

const ProfileView = observer(({ profileData }: any) => {
  return (
    <Grid>
      {/* Personal Information */}
      <Heading color="#002058" fontSize="xl" mb={4}>
        Personal Information :-{" "}
      </Heading>
      <Divider />
      <Grid
        pt={{ base: 5, sm: 6 }}
        mb={3}
        gridTemplateColumns={{ lg: "1fr 1fr 1fr" }}
        rowGap={5}
      >
        <Box>
          <Text color="#002058" fontWeight="bold">
            First Name
          </Text>
          <Text mt={1} color="#685f78" fontSize="14px">
            {profileData?.name}
          </Text>
        </Box>
        <Box>
          <Text color="#002058" fontWeight="bold">
            User Name
          </Text>
          <Text mt={1} color="#685f78" fontSize="14px">
            {profileData?.username}
          </Text>
        </Box>
        <Box>
          <Text color="#002058" fontWeight="bold">
            Registration Date
          </Text>
          <Text mt={1} color="#685f78" fontSize="14px">
            {profileData?.createdAt}
          </Text>
        </Box>
        <Box>
          <Text color="#002058" fontWeight="bold">
            Email
          </Text>
          <Text mt={1} color="#685f78" fontSize="14px">
            {profileData?.username}
          </Text>
        </Box>
        <Box>
          <Text color="#002058" fontWeight="bold">
            Father Name
          </Text>
          <Text mt={1} color="#685f78" fontSize="14px">
            {profileData?.profile_details?.fatherName}
          </Text>
        </Box>
        <Box>
          <Text color="#002058" fontWeight="bold">
            Mother Name
          </Text>
          <Text mt={1} color="#685f78" fontSize="14px">
            {profileData?.profile_details?.motherName}
          </Text>
        </Box>
        <Box>
          <Text color="#002058" fontWeight="bold">
            Mobile No.
          </Text>
          <Text mt={1} color="#685f78" fontSize="14px">
            {profileData?.profile_details?.mobileNo ? profileData?.profile_details?.mobileNo : "-"}
          </Text>
        </Box>
        <Box>
          <Text color="#002058" fontWeight="bold">
            Emergency No.
          </Text>
          <Text mt={1} color="#685f78" fontSize="14px">
            {profileData?.profile_details?.emergencyNo}
          </Text>
        </Box>
      </Grid>
      {/* Divider */}
      <Divider mt={3} />
      {/* Address */}
      <Grid>
        <Heading color="#002058" fontSize="xl" mt={5} mb={0}>
          Address Infomation :-
        </Heading>
        {profileData?.profile_details?.addressInfo?.map((item : any, index : number) => {
          return (
            <div>
            <Grid
              pt={{ base: 5, sm: 6 }}
              gridTemplateColumns={{ lg: "2fr 1fr 1fr" }}
              rowGap={5}
              key={index}
            >
              <Box>
                <Text color="#002058" fontWeight="bold">
                  Address
                </Text>
                <Text mt={1} color="#685f78" fontSize="14px">
                  {item?.address}
                </Text>
              </Box>
              <Box>
                <Text color="#002058" fontWeight="bold">
                  Country
                </Text>
                <Text mt={1} color="#685f78" fontSize="14px">
                {item?.country}
                </Text>
              </Box>
              <Box>
                <Text color="#002058" fontWeight="bold">
                  State
                </Text>
                <Text mt={1} color="#685f78" fontSize="14px">
                {item?.state}
                </Text>
              </Box>
              <Box>
                <Text color="#002058" fontWeight="bold">
                  City
                </Text>
                <Text mt={1} color="#685f78" fontSize="14px">
                {item?.city}
                </Text>
              </Box>
              <Box>
                <Text color="#002058" fontWeight="bold">
                  PinCode
                </Text>
                <Text mt={1} color="#685f78" fontSize="14px">
                {item?.pinCode}
                </Text>
              </Box>
            </Grid>
            <Divider mt={6}/>
            </div>
          );
        })}
      </Grid>
    </Grid>
  );
});

export default ProfileView;

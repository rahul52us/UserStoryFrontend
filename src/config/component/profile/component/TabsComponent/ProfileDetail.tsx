import { Box, Grid, Heading } from "@chakra-ui/react";
import CustomInput from "../../../CustomInput/CustomInput";

const ProfileDetail = () => {
return (
    <Box>
    <Heading size={"md"}>My Profile</Heading>
    <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr", xl: "1fr 1fr 1fr" }}
        gap={2}
        columnGap={5}
        mt={3}
    >
        <CustomInput
        type="text"
        name="name"
        placeholder="Enter the First Name"
        label="First Name"
        />
        <CustomInput
        type="text"
        name="name"
        placeholder="Enter the Last Name"
        label="Last Name"
        />
        <CustomInput
        type="text"
        name="name"
        placeholder="Enter the Username Name"
        label="Username"
        disabled={true}
        />
        <CustomInput
        label="Priority"
        type="text"
        name="name"
        placeholder="Enter the First Name"
        />
        <CustomInput
        label="Priority"
        type="text"
        name="name"
        placeholder="Enter the First Name"
        />
        <CustomInput
        name="priority"
        label="Priority"
        required
        placeholder="Select the Priority"
        options={[
            { value: "Low", label: "Low" },
            { value: "Medium", label: "Medium" },
            { value: "High", label: "High" },
        ]}
        type="select"
        />
    </Grid>
    </Box>
);
};

export default ProfileDetail;

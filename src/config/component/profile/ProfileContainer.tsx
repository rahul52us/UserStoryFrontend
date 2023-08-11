import { Box, Grid, useBreakpointValue } from "@chakra-ui/react";
import ProfileBanner from "./component/ProfileBanner";
import ProfileMainTabContainer from "./component/element/component/profileTabContainer/ProfileMainTabContainer";
// import ProfileFormContainer from "./component/element/component/ProfileFormContainer/ProfileFormContainer";
import { observer } from "mobx-react-lite";
// import ProfileChangePassword from "./component/TabsComponent/ProfileChangePassword";
import ProfileFormContainer from "./component/element/component/ProfileFormContainer/ProfileFormContainer";

const ProfileContainer = observer(({profileData} : any) => {
  const LargerThanMd = useBreakpointValue({ xl: true });
  return (
    <div>
      <ProfileBanner />
      <Grid
        gridTemplateColumns={{ lg: "0.35fr 1fr" }}
        style={{
          marginLeft: LargerThanMd ? "140px" : "10px",
          marginRight: LargerThanMd ? "140px" : "10px",
        }}
        gap={10}
        mt={6}
        mb={10}
      >
        <ProfileMainTabContainer profileData={profileData} />
        <Box border="1px solid #e9ecef" borderRadius={5} p={5}>
          {/* <ProfileChangePassword /> */}
          <ProfileFormContainer profileData={profileData}/>

        </Box>
      </Grid>
    </div>
  );
});

export default ProfileContainer;

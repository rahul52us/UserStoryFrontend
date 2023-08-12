import { Box, Grid, useBreakpointValue } from "@chakra-ui/react";
import {  useParams } from "react-router-dom";
import ProfileBanner from "./component/ProfileBanner";
import ProfileMainTabContainer from "./component/element/component/profileTabContainer/ProfileMainTabContainer";
import { observer } from "mobx-react-lite";
import ProfileChangePassword from "./component/TabsComponent/ProfileChangePassword";
import ProfileEdit from "./component/element/component/ProfileFormContainer/element/ProfileEdit/ProfileEdit";
import ProfileView from "./component/element/component/ProfileFormContainer/element/ProfileView/ProfileView";

const ProfileContainer = observer(({classes,profileData,type,changePassword} : any) => {
  const LargerThanMd = useBreakpointValue({ xl: true });

  const {profileTab} = useParams()

  const getActiveComponent = ({classes,profileData,type,changePassword} : any) => {

    switch(profileTab) {
      case 'edit':
        return <ProfileEdit type={type} profileData={profileData} classes={classes}/>
      case 'change-password':
        return <ProfileChangePassword changePassword={changePassword} />
      default:
        return <ProfileView type={type} profileData={profileData} />
    }
  }

  return (
    <div>
      <ProfileBanner />
      <Grid
        gridTemplateColumns={{ lg: "0.35fr 1fr" }}
        style={{
          marginLeft: LargerThanMd ? "140px" : "10px",
          marginRight: LargerThanMd ? "100px" : "10px",
        }}
        gap={10}
        mt={6}
        mb={10}
      >
        <Box>
        <ProfileMainTabContainer profileData={profileData} type={type} />
        </Box>
        <Box border="1px solid #e9ecef" borderRadius={5} p={5}>
          {getActiveComponent({classes,profileData,type,changePassword})}
        </Box>
      </Grid>
    </div>
  );
});

export default ProfileContainer;
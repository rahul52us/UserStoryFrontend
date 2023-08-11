import { observer } from "mobx-react-lite";
import ProfileTabAvatar from "./ProfileTabAvatar";
import { Grid } from "@chakra-ui/react";
import ProfileTabContainer from "./ProfileTabContainer";

const ProfileMainTabContainer = observer(({profileData} : any) => {
  return (
    <Grid rowGap={5}>
    <ProfileTabAvatar profileData={profileData}/>
    <ProfileTabContainer />
    </Grid>
  );
});

export default ProfileMainTabContainer;
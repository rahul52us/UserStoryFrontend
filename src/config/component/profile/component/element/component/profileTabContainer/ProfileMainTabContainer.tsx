import { observer } from "mobx-react-lite";
import ProfileTabAvatar from "./ProfileTabAvatar";
import { Grid } from "@chakra-ui/react";
import ProfileTabContainer from "./ProfileTabContainer";

const ProfileMainTabContainer = observer(({profileData, type} : any) => {
  return (
    <Grid rowGap={5}>
    <ProfileTabAvatar profileData={profileData} type={type} />
    <ProfileTabContainer type={type}  />
    </Grid>
  );
});

export default ProfileMainTabContainer;
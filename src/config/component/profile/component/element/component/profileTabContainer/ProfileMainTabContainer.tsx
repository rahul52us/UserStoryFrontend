import { observer } from "mobx-react-lite";
import ProfileTabAvatar from "./ProfileTabAvatar";
import { Grid } from "@chakra-ui/react";
import ProfileTabContainer from "./ProfileTabContainer";

const ProfileMainTabContainer = observer(({profileData, type, sideTab, editTabLink} : any) => {
  return (
    <Grid rowGap={5}>
    <ProfileTabAvatar profileData={profileData} type={type} />
    <ProfileTabContainer type={type} sideTab={sideTab} editTabLink={editTabLink}/>
    </Grid>
  );
});

export default ProfileMainTabContainer;
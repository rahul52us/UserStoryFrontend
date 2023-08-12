import { observer } from "mobx-react-lite";
import ProfileView from "./element/ProfileView/ProfileView";

const ProfileFormContainer = observer(({profileData} : any) => {
  return <ProfileView profileData={profileData} />
});

export default ProfileFormContainer;
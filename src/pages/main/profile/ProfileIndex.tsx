// import {useState} from 'react'
// import { observer } from "mobx-react-lite";
// import CommonProfileIndex from "../../../config/component/profile/CommonProfileIndex";
// import store from "../../../store/store";

import { observer } from "mobx-react-lite";
import ProfileContainer from "../../../config/component/profile/ProfileContainer";
import store from "../../../store/store";

// const ProfileIndex = observer(() => {
//   const {auth : {changePasswordStore}} = store;

//   const currentActiveTab = useState<any>(
//     localStorage.getItem("profile_current_active_tab" || "0")
//   )[0];

//   return (
//     <div>
//       <CommonProfileIndex changePassword={changePasswordStore} currentActiveTab={currentActiveTab} />
//     </div>
//   );
// });

// export default ProfileIndex;

const ProfileIndex = observer(() => {
  const {
    auth: { user },
  } = store;
  return user ? <ProfileContainer profileData={user}/> : null;
});

export default ProfileIndex;
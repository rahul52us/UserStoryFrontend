import {useState} from 'react'
import { observer } from "mobx-react-lite";
import CommonProfileIndex from "../../../config/component/profile/CommonProfileIndex";
import store from "../../../store/store";

const ProfileIndex = observer(() => {
  const {auth : {changePasswordStore}} = store;

  const currentActiveTab = useState<any>(
    localStorage.getItem("profile_current_active_tab" || "0")
  )[0];

  return (
    <div>
      <CommonProfileIndex changePassword={changePasswordStore} currentActiveTab={currentActiveTab} />
    </div>
  );
});

export default ProfileIndex;
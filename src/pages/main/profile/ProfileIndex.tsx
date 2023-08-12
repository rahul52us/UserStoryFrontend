import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import ProfileContainer from "../../../config/component/profile/ProfileContainer";
import store from "../../../store/store";
import { currentYear, oneYearLater } from "../../../config/constant/function";

const ProfileIndex = observer(() => {
  const {
    classStore: { getClasses, classes },
    auth: { openNotification, changePasswordStore, user },
  } = store;

  const date = useState({
    startYear: currentYear,
    endYear: oneYearLater,
  })[0];

  useEffect(() => {
    if (user) {
      getClasses({ startYear: date.startYear, endYear: date.endYear })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          openNotification({
            title: "Failed to Get Classes",
            message: err.message,
            type: "error",
          });
        });
    }
  }, [getClasses, openNotification, date, user]);

  return user ? (
    <ProfileContainer
      profileData={user}
      changePassword={changePasswordStore}
      type="profile"
      classes={classes.data}
    />
  ) : null;
});

export default ProfileIndex;

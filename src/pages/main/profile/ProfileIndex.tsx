import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import ProfileContainer from "../../../config/component/profile/ProfileContainer";
import store from "../../../store/store";
import { currentYear, oneYearLater } from "../../../config/constant/function";
import { studentInitialValues } from "../../../config/component/profile/utils/constant";
import { studentEditValidation } from "../../../config/component/profile/utils/validation";
import { EditStudentSideTab } from "../../Dashboard/UserTypes/Student/utils/constant";

const ProfileIndex = observer(() => {
  const {
    classStore: { getClasses, classes },
    auth: { openNotification, changePasswordStore, user,updateProfile },
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

  const handleSubmitProfile = (values : any ,setSubmitting : any, resetForm : any, setErrors : any, setShowError : any) => {
    try
    {
      updateProfile(values)
        .then((data) => {
          openNotification({
            title: "UPDATE SUCCESSFULLY",
            message: data.message
          });
          setErrors({})
          setShowError(false)
          console.log(resetForm)
        })
        .catch((err) => {
          openNotification({
            title: "Failed to Update Profile",
            message: err.message,
            type: "error",
          });
        }).finally(() => {
          setSubmitting(false)
        });
    }
    catch(err : any)
    {
      console.log(err.message)
    }
  }

  return user ? (
    <ProfileContainer
      initialValues={studentInitialValues(user)}
      profileData={studentInitialValues(user)}
      validations={studentEditValidation}
      changePassword={changePasswordStore}
      classes={classes.data}
      sideTab={EditStudentSideTab}
      editTabLink={'/profile?'}
      handleSubmitProfile={handleSubmitProfile}
      type="edit"
    />
  ) : null;
});

export default ProfileIndex;
import { observer } from "mobx-react-lite";
import ProfileContainer from "../../../../../../config/component/profile/ProfileContainer";
import { Box } from "@chakra-ui/react";
import store from "../../../../../../store/store";
import { sendStudentData } from "../../utils/constant";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { studentInitialValues } from "../../../../../../config/component/profile/utils/constant";
import { studentCreateValidation } from "../../../../../../config/component/profile/utils/validation";

const StudentProfileIndex = observer(({ type, sideTab, editTabLink }: any) => {
  const location = useLocation()
  const {
    classStore: { classes },
    auth: { openNotification },
    Student: { createStudent, getStudentById,studentDetails },
  } = store;

  useEffect(() => {
    if(new URLSearchParams(location.search).get("edit") && type === "edit" && !studentDetails.hasFetch){
      getStudentById({_id : new URLSearchParams(location.search).get("edit") }).then(() => {
      }).catch((err) => {
        openNotification({
          title: "FAILED TO GET STUDENT DETAILS",
          message: err?.message,
          type: "error",
        });
      }).finally(() => {

      })
      alert(new URLSearchParams(location.search).get("edit"))
    }
  },[studentDetails.hasFetch,location.search,type,getStudentById,openNotification])

  const handleSubmitProfile = (
    sendData: any,
    setSubmitting: any,
    resetForm: any,
    _: any,
    setShowError: any
  ) => {
    if (type === "create") {
      setSubmitting(true);
      createStudent(sendStudentData(sendData))
        .then((data) => {
          openNotification({
            title: "CREATED SUCCESSFULLY",
            message: data?.message,
          });
          resetForm();
          setShowError(false);
        })
        .catch((err) => {
          openNotification({
            title: "FAILED TO CREATE STUDENT",
            message: err?.message,
            type: "error",
          });
        })
        .finally(() => {
          setSubmitting(false);
        });
    }
  };

  return (
    <Box m={{ lg: -5 }}>
      {studentDetails.data && !studentDetails.loading ?
      <ProfileContainer
        sideTab={sideTab}
        type={type}
        editTabLink={editTabLink}
        handleSubmitProfile={handleSubmitProfile}
        classes={classes.data}
        initialValues={studentInitialValues({...studentDetails.data.user})}
        validations={studentCreateValidation}
        profileData={studentInitialValues({...studentDetails.data.user})}
      /> : <p>Wait please</p>}
    </Box>
  );
});

export default StudentProfileIndex;
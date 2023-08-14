import { observer } from "mobx-react-lite";
import ProfileContainer from "../../../../../../config/component/profile/ProfileContainer";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { currentYear, oneYearLater } from "../../../../../../config/constant/function";
import { useEffect, useState } from "react";
import store from "../../../../../../store/store";
import { sendStudentData } from "../../utils/constant";

const StudentProfileIndex = observer(() => {
  const { className } = useParams();

  const {
    classStore: { getClasses, classes },
    auth: { openNotification },
    Student : {createStudent}
  } = store;

  const date = useState({
    startYear: currentYear,
    endYear: oneYearLater,
  })[0];

  useEffect(() => {
      getClasses({ startYear: date.startYear, endYear: date.endYear })
        .then((data : any) => {
          console.log(data);
        })
        .catch((err : any) => {
          openNotification({
            title: "Failed to Get Classes",
            message: err.message,
            type: "error",
          });
        });
  }, [getClasses, openNotification, date]);

  const handleSubmitProfile = (sendData : any, setSubmitting : any, resetForm : any,_ : any ,setShowError : any ) => {
    setSubmitting(true)
    createStudent(sendStudentData(sendData)).then((data) => {
      openNotification({
        title: "CREATED SUCCESSFULLY",
        message: data?.message,
      });
      resetForm()
      setShowError(false)
    }).catch((err) => {
      openNotification({
        title: "FAILED TO CREATE STUDENT",
        message: err?.message,
        type: "error",
      });
    }).finally(() => {
      setSubmitting(false)
    })
  }

  return (
    <Box m={{ lg: -5 }}>
      <ProfileContainer type={`dashboard/students/class/${className}`} handleSubmitProfile={handleSubmitProfile} classes={classes.data} formType="create" />
    </Box>
  );
});

export default StudentProfileIndex;
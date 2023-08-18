import { observer } from "mobx-react-lite";
import ProfileContainer from "../../../../../../config/component/profile/ProfileContainer";
import { Box } from "@chakra-ui/react";
import store from "../../../../../../store/store";
import { sendStudentData } from "../../utils/constant";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { studentInitialValues } from "../../../../../../config/component/profile/utils/constant";
import {
  studentCreateValidation,
  studentEditValidation,
} from "../../../../../../config/component/profile/utils/validation";
import Loader from "../../../../../../config/component/Loader/Loader";

const StudentProfileIndex = observer(({ type, sideTab, editTabLink }: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    classStore: { classes },
    auth: { openNotification },
    Student: {
      createStudent,
      getStudentById,
      studentDetails,
      updateStudentProfile,
    },
  } = store;

  const redirectToTableBack = () => {
    navigate(
      `/dashboard/students/index?class=${new URLSearchParams(
        location.search
      ).get("class")}&section=${new URLSearchParams(location.search).get(
        "section"
      )}&startYear=${new URLSearchParams(location.search).get(
        "startYear"
      )}&endYear=${new URLSearchParams(location.search).get("endYear")}`
    );
  };

  useEffect(() => {
    if (
      new URLSearchParams(location.search).get("edit") &&
      type === "edit" &&
      !studentDetails.hasFetch
    ) {
      getStudentById({ _id: new URLSearchParams(location.search).get("edit")})
        .then(() => {})
        .catch((err) => {
          openNotification({
            title: "FAILED TO GET STUDENT DETAILS",
            message: err?.message,
            type: "error",
          });
        })
    }
  }, [
    studentDetails.hasFetch,
    location.search,
    type,
    getStudentById,
    openNotification,
  ]);

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
          redirectToTableBack();
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
    } else if (type === "edit") {
      setSubmitting(true);
      updateStudentProfile(new URLSearchParams(location.search).get("edit"),sendStudentData(sendData))
        .then((data) => {
          openNotification({
            title: "UPDATED SUCCESSFULLY",
            message: data?.message,
          });
          setShowError(false);
        })
        .catch((err) => {
          openNotification({
            title: "FAILED TO UPDATE STUDENT",
            message: err?.message,
            type: "error",
          });
        })
        .finally(() => {
          setSubmitting(false);
        });
    } else {
      alert("something went wrong");
    }
  };

  return (
    <Box m={{ lg: -5 }}>
      {type === "edit" ? (
        studentDetails.data && !studentDetails.loading ? (
          <ProfileContainer
            sideTab={sideTab}
            type={type}
            editTabLink={editTabLink}
            handleSubmitProfile={handleSubmitProfile}
            classes={classes.data}
            initialValues={studentInitialValues({
              ...studentDetails.data.user,
            })}
            validations={studentEditValidation}
            profileData={studentInitialValues({ ...studentDetails.data.user })}
          />
        ) : (
          <Loader />
        )
      ) : (
        <ProfileContainer
          sideTab={sideTab}
          type={type}
          editTabLink={editTabLink}
          handleSubmitProfile={handleSubmitProfile}
          classes={classes.data}
          initialValues={studentInitialValues(null)}
          validations={studentCreateValidation}
          profileData={studentInitialValues(null)}
        />
      )}
    </Box>
  );
});

export default StudentProfileIndex;
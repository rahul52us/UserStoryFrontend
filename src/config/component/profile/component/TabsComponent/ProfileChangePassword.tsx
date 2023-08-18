import { useState } from "react";
import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import CustomInput from "../../../CustomInput/CustomInput";
import CustomSubmitBtn from "../../../Button/CustomSubmitBtn";
import { Form, Formik } from "formik";
import { ChangePasswordValidation } from "../../utils/validation";
import store from "../../../../../store/store";

interface ProfileChangePasswordI {
  changePassword?: any;
}

const ProfileChangePassword = ({ changePassword }: ProfileChangePasswordI) => {
  const {
    auth: { openNotification },
  } = store;
  const [showError, setShowError] = useState(false);
  return (
    <Box p={4} bg="white" borderRadius="lg" boxShadow="md">
    <Formik
      validationSchema={ChangePasswordValidation}
      initialValues={{ oldPassword: "", newPassword: "", confirmPassword: "" }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        changePassword(values)
          .then((data: any) => {
            openNotification({
              message: data.message,
              title: "Password Change Successfully",
            });
            resetForm();
            setShowError(false);
          })
          .catch((err: any) => {
            openNotification({
              title: "Requested Failed",
              message: err.message,
              type: "error",
            });
          })
          .finally(() => {
            setSubmitting(false);
          });

        console.log(values);
        setTimeout(() => {
          setSubmitting(false);
        }, 4000);
      }}
    >
      {({ handleChange, handleSubmit, values, isSubmitting, errors }) => (
        <Form onSubmit={handleSubmit}>
          <Flex
            flexDirection={"column"}
            justifyContent={"space-between"}
            height={"100%"}
          >
            <Box>
              <Heading size={"md"}>Change Password</Heading>
              <Grid
                templateColumns={{ base: "1fr", md: "1fr", xl: "1fr" }}
                gap={2}
                columnGap={5}
                mt={3}
              >
                <CustomInput
                  type="text"
                  name="oldPassword"
                  placeholder="Enter the Old Password"
                  label="Old Password"
                  value={values.oldPassword}
                  required
                  onChange={handleChange}
                  error={errors.oldPassword}
                  showError={showError}
                />
                <CustomInput
                  type="text"
                  name="newPassword"
                  placeholder="Enter the New Password"
                  label="New Password"
                  required
                  value={values.newPassword}
                  onChange={handleChange}
                  error={errors.newPassword}
                  showError={showError}
                />
                <CustomInput
                  type="text"
                  name="confirmPassword"
                  placeholder="Enter the Confirm Password"
                  label="Confirm Password"
                  required
                  value={values.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                  showError={showError}
                />
              </Grid>
            </Box>
            <Flex justifyContent={"flex-end"} mt={5}>
              <CustomSubmitBtn
                loading={isSubmitting}
                type="submit"
                onClick={() => setShowError(true)}
              />
            </Flex>
          </Flex>
        </Form>
      )}
    </Formik>
    </Box>
  );
};

export default ProfileChangePassword;
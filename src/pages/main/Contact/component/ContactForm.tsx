import { Button } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import CustomInput from "../../../../config/component/CustomInput/CustomInput";
import { Box, Grid, Heading } from "@chakra-ui/layout";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { Form, Formik } from "formik";
import { ContactValidation } from "../utils/validation";
import { useState } from "react";

const ContactForm = observer(() => {
  const [showError, setShowError] = useState(false);

  const { t } = useTranslation();
  return (
    <Box
      border="1px solid"
      borderColor="gray.300"
      rounded={10}
      p={{ base: 6, md: "8 10" }}
    >
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          userName: "",
          phone: "",
          description: "",
        }}
        validationSchema={ContactValidation}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, handleChange, errors, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Grid gap={3}>
              <Heading fontSize="3xl">
                {t("contact.contact_form_title")}
              </Heading>
              <Grid templateColumns={{ md: "1fr 1fr" }} gap={6}>
                <CustomInput
                  placeholder="Enter First Name"
                  label="First Name"
                  name="firstName"
                  error={errors.firstName}
                  value={values.firstName}
                  onChange={handleChange}
                  required
                  showError={showError}
                />
                <CustomInput
                  placeholder="Enter Last Name"
                  label="Last Name"
                  name="lastName"
                  error={errors.lastName}
                  value={values.lastName}
                  onChange={handleChange}
                  required
                  showError={showError}
                />
              </Grid>
              <CustomInput
                placeholder="Enter User Name"
                label="User Name"
                name="userName"
                error={errors.userName}
                value={values.userName}
                onChange={handleChange}
                required
                showError={showError}
              />
              <CustomInput
                type="phone"
                label="Phone Number"
                name="phone"
                error={errors.phone}
                value={values.phone}
                onChange={handleChange}
                showError={showError}
                required
              />
              <CustomInput
                type="textarea"
                label="Description"
                placeholder="Description"
                name="description"
                error={errors.description}
                value={values.description}
                onChange={handleChange}
                showError={showError}
                required
              />
              <Button
                h={{ base: "45px", md: "56px" }}
                bg={useColorModeValue("blue.500", "white")}
                color={useColorModeValue("white", "blue.500")}
                fontSize={{ md: "lg" }}
                transition=".3s ease-in-out"
                _hover={{
                  transform: "scale(.9)",
                }}
                isLoading={isSubmitting}
                onClick={() => {
                  setShowError(true);
                }}
              >
                Submit
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
});

export default ContactForm;

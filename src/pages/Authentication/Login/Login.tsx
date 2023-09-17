import {
  Flex,
  Box,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Formik, Form, Field } from "formik";
import CustomInput from "../../../config/component/CustomInput/CustomInput";
import { LoginValidation } from "../utils/validation";
import store from "../../../store/store";
import { authentication, main } from "../../../config/constant/routes";
import { useState } from "react";

const Login = observer(() => {
  const [isBelowMd] = useMediaQuery("(max-width: md)");
  const [showError, setShowError] = useState(false);
  const {
    auth: { openNotification, login },
  } = store;
  const navigate = useNavigate();

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={8}
        mx="auto"
        maxW="lg"
        py={12}
        px={2}
        minW={isBelowMd ? "100%" : "30%"}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Formik
            initialValues={{
              username: "",
              password: "",
              remember_me: false,
            }}
            validationSchema={LoginValidation}
            onSubmit={(values, { setSubmitting }) => {
              login(values)
                .then(() => {
                  openNotification({
                    title: "Login Success",
                    message: "username has been login successFully",
                    type: "success",
                  });
                  navigate(main.home);
                })
                .catch((error: Error) => {
                  openNotification({
                    title: "Login Failed",
                    message: error.message,
                    type: "error",
                  });
                })
                .finally(() => {
                  setSubmitting(false);
                });
            }}
          >
            {({ handleSubmit, handleChange, errors, values, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <CustomInput
                    type="text"
                    name="username"
                    label="Email"
                    placeholder="Enter the email"
                    required={true}
                    error={errors.username}
                    onChange={handleChange}
                    value={values.username}
                    showError={showError}
                  />
                  <CustomInput
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Enter the password"
                    error={errors.password}
                    onChange={handleChange}
                    value={values.password}
                    required={true}
                    showError={showError}
                  />
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <Field as={Checkbox} name="remember_me">
                        Remember me
                      </Field>
                      <Link
                        color={"blue.400"}
                        onClick={() => navigate(authentication.forgotPassword)}
                      >
                        Forgot password?
                      </Link>
                    </Stack>
                    <Button
                      type="submit"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      isLoading={isSubmitting}
                      onClick={() => {
                        setShowError(true);
                      }}
                    >
                      Sign in
                    </Button>
                  </Stack>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Stack>
    </Flex>
  );
});

export default Login;
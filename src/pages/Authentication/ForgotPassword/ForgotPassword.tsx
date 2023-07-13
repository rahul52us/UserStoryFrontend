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
import CustomInput from "../../../config/component/CustomInput/CustomInput";
import { Form, Formik } from "formik";
import { ForgotEmailValidation } from "../utils/validation";
import { authentication } from "../../../config/constant/routes";
import { useNavigate } from "react-router-dom";
import store from "../../../store/store";
import { observer } from "mobx-react-lite";

const ForgotPassword = observer(() => {
  const {auth : { openNotification, forgotPasswordStore}} = store
  const navigate = useNavigate()
  const [isBelowMd] = useMediaQuery("(max-width: md)");

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
          <Stack spacing={8} mx="auto" maxW="lg" py={12} px={2} minW={isBelowMd ? "100%" : "30%"}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Forgot Password</Heading>
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
            initialValues={{ username: "" }}
            validationSchema={ForgotEmailValidation}
            onSubmit={(values, { setSubmitting }) => {
              forgotPasswordStore(values).then((data) => {
                openNotification({
                  title: "Password Change Requested Successfully",
                  message: data.message,
                  type: "success",
                });
                navigate('/')
              }).catch((err : any) => {
                openNotification({
                  title: "Requested Failed",
                  message: err.message,
                  type: 'error',
                });
              }).finally(() => {
                setSubmitting(false)
              })
            }}
          >
            {({ values, handleSubmit, handleChange, isSubmitting, errors }) => (
              <Form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <CustomInput
                    type="text"
                    name="username"
                    label="Email"
                    placeholder="Enter the email"
                    required={true}
                    value={values.username}
                    onChange={handleChange}
                    error={errors.username}
                  />
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <Checkbox>Remember me</Checkbox>
                      <Link color={"blue.400"} onClick={() => navigate(authentication.login)}>Sign in?</Link>
                    </Stack>
                    <Button
                      type="submit"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      isLoading={isSubmitting}
                    >
                      Submit
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

export default ForgotPassword;

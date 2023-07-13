import { useState, useEffect } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Formik, Form, Field } from "formik";
import CustomInput from "../../../config/component/CustomInput/CustomInput";
import { OrganisationCreateValidation } from "../utils/validation";
import store from "../../../store/store";
import { authentication } from "../../../config/constant/routes";
import debounce from "lodash/debounce";

const CreateOrganisation = observer(() => {
  const [isBelowMd] = useMediaQuery("(max-width: md)");
  const [organisationError, setOrganisationError] = useState("");
  const { token } = useParams();
  const {
    auth: { openNotification, createOrganisation },
    Organisation: { filterOrganisation },
  } = store;
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const debouncedSearch = debounce((value) => {
      filterOrganisation(value)
        .then(() => {
          setOrganisationError("");
        })
        .catch((err) => {
          setOrganisationError(err.message);
        });
    }, 1500);

    debouncedSearch(searchValue);

    // Cleanup the debounced function on unmount
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchValue,filterOrganisation]);

  const handleSearchChange = (e: any) => {
    const value = e.target.value;
    setSearchValue(value);
  };

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
          <Heading fontSize={"4xl"}>Create the Organisation</Heading>
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
              first_name: "",
              last_name: "",
              company_name: "",
              username: "",
              password: "",
              remember_me: false,
              token: token,
            }}
            validationSchema={OrganisationCreateValidation}
            onSubmit={(values, { setSubmitting }) => {
              if (!organisationError) {
                createOrganisation(values)
                  .then((data) => {
                    openNotification({
                      title: "Create Success",
                      message: data.message,
                      type: "success",
                    });
                    navigate("/");
                  })
                  .catch((error) => {
                    openNotification({
                      title: "Create Failed",
                      message: error?.message,
                      type: "error",
                    });
                  })
                  .finally(() => {
                    setSubmitting(false);
                  });
              } else {
                setSubmitting(false);
              }
            }}
          >
            {({ handleSubmit, handleChange, errors, values, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <CustomInput
                    type="text"
                    name="first_name"
                    label="First Name"
                    placeholder="Enter the First Name"
                    required={true}
                    error={errors.first_name}
                    onChange={handleChange}
                    value={values.first_name}
                  />
                  <CustomInput
                    type="text"
                    name="last_name"
                    label="Last Name"
                    placeholder="Enter the Last Name"
                    required={true}
                    error={errors.last_name}
                    onChange={handleChange}
                    value={values.last_name}
                  />
                  <CustomInput
                    type="text"
                    name="username"
                    label="Email"
                    placeholder="Enter the email"
                    required={true}
                    error={errors.username}
                    onChange={handleChange}
                    value={values.username}
                  />
                  <CustomInput
                    type="text"
                    name="company_name"
                    label="Organisation Name"
                    placeholder="Enter the Organisation Name"
                    required={true}
                    error={errors.company_name || organisationError}
                    onChange={(e: any) => {
                      handleSearchChange(e);
                      handleChange(e);
                    }}
                    value={values.company_name}
                  />
                  <CustomInput
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Enter the password"
                    error={errors.password}
                    onChange={handleChange}
                    value={values.password}
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
                      disabled
                      type="submit"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      isLoading={isSubmitting}
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

export default CreateOrganisation;

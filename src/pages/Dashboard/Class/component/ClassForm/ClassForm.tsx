import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import CustomInput from "../../../../../config/component/CustomInput/CustomInput";
import {
  classMediums,
  optamizedClassData,
  setClassInitialValue,
} from "../../utils/constant";
import { BiQuestionMark } from "react-icons/bi";
import { FieldArray, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import { ClassValidationSchema } from "../../utils/validation";
import CustomSubmitBtn from "../../../../../config/component/Button/CustomSubmitBtn";
import store from "../../../../../store/store";

interface ClassFormI {
  formData?: any;
}

const ClassForm = observer(({ formData }: ClassFormI) => {
  const {
    classStore: { createClass, updateClass },
    auth: { openNotification },
  } = store;
  const [showError, setShowError] = useState(false);

  const getSectionNameError = (errors: any, index: number) => {
    if (errors.sections && errors.sections[index]) {
      return errors.sections[index].name;
    }
    return undefined;
  };

  return (
    <Formik
      initialValues={setClassInitialValue(formData.data)}
      validationSchema={ClassValidationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        if (formData.type === "edit") {
          updateClass(optamizedClassData({ ...formData.data, ...values }))
            .then((data: any) => {
              openNotification({
                title: "UPDATE CLASS SUCCESSFULLY",
                message: data.message,
              });
              resetForm();
              setShowError(false);
            })
            .catch((err: any) => {
              openNotification({
                type: "error",
                message: err.message,
                title: "UPDATE FAILED",
              });
            })
            .finally(() => {
              setSubmitting(false);
            });
        } else {
          createClass(optamizedClassData(values))
            .then((data: any) => {
              openNotification({
                title: "CREATE CLASS SUCCESSFULLY",
                message: data.message,
              });
              resetForm();
              setShowError(false);
            })
            .catch((err: any) => {
              openNotification({
                type: "error",
                message: err.message,
                title: "CREATE FAILED",
              });
            })
            .finally(() => {
              setSubmitting(false);
            });
        }
      }}
    >
      {({ values, errors, handleChange, setFieldValue, isSubmitting }) => {
        return (
          <Form>
            <Flex justifyContent="space-between" flexDirection="column" m={-6}>
              <Box
                mt={1}
                p={5}
                overflowY="auto"
                overflowX={"hidden"}
                flex="1"
                minH="85vh"
                maxH={"85vh"}
              >
                <Grid gap={3}>
                  <CustomInput
                    type="text"
                    name="name"
                    label="Class Name"
                    placeholder="Enter The Title Name"
                    required
                    onChange={handleChange}
                    value={values.name}
                    error={errors.name}
                    showError={showError}
                  />
                  <Grid
                    gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={3}
                  >
                    <CustomInput
                      type="date"
                      name="title"
                      label="Start Year"
                      placeholder="Enter The Start Year"
                      required
                      value={values.startYear}
                      onChange={(e: any) => {
                        setFieldValue("startYear", e);
                      }}
                      error={errors.startYear}
                      showError={showError}
                    />
                    <CustomInput
                      type="date"
                      name="title"
                      label="End Year"
                      placeholder="Enter The End Year"
                      required
                      error={errors.endYear}
                      value={values.endYear}
                      showError={showError}
                      onChange={(e: any) => {
                        setFieldValue("endYear", e);
                      }}
                      minDate={values.startYear ? values.startYear : undefined}
                      disabled={!values.startYear}
                    />
                    <CustomInput
                      type="select"
                      options={classMediums}
                      name="medium"
                      label="Medium"
                      required
                      value={values.medium}
                      error={errors.medium}
                      onChange={(e: any) => {
                        setFieldValue("medium", e);
                      }}
                      showError={showError}
                    />
                  </Grid>
                  <Divider mt={3} />
                  <Grid gap={2}>
                    <Flex gap={3} alignItems="center">
                      <Heading fontSize={"2xl"}>CREATE SECTION</Heading>
                      <Tooltip
                        placement="top-start"
                        hasArrow
                        label="If no Class Section are provided then Class name used as first Section name"
                      >
                        <IconButton
                          size="sm"
                          icon={<BiQuestionMark size="1.7rem" />}
                          aria-label="section title"
                        />
                      </Tooltip>
                    </Flex>
                    <FieldArray name="sections">
                      {({ push, remove }) => (
                        <Box>
                          {values.sections.map(
                            (section: any, index: number) => (
                              <Box key={index} mb="20px">
                                <CustomInput
                                  label="Section"
                                  type="text"
                                  name={`sections.${index}.name`}
                                  value={section.name}
                                  onChange={handleChange}
                                  placeholder="Enter the Section Name"
                                  showError={showError}
                                  error={getSectionNameError(errors, index)}
                                />
                                <CustomInput
                                  type="select"
                                  options={classMediums}
                                  name={`sections.${index}.medium`}
                                  label="Medium"
                                  required
                                  value={section.medium}
                                  error={errors.medium}
                                  onChange={(e: any) => {
                                    setFieldValue(`sections.${index}.medium`, e);
                                  }}
                                  showError={showError}
                                />
                                {values.sections.length > 1 && (
                                  <Button
                                    colorScheme="red"
                                    variant="outline"
                                    size="sm"
                                    mt="10px"
                                    onClick={() => remove(index)}
                                  >
                                    Remove Section
                                  </Button>
                                )}
                              </Box>
                            )
                          )}
                          <Button
                            colorScheme="blue"
                            variant="outline"
                            size="sm"
                            mb="10px"
                            onClick={() => push({ name: "" })}
                          >
                            Add Section
                          </Button>
                        </Box>
                      )}
                    </FieldArray>
                  </Grid>
                </Grid>
              </Box>
              <Flex justifyContent="flex-end" mt={5} mr={5}>
                <CustomSubmitBtn
                  loading={isSubmitting}
                  type="submit"
                  onClick={() => setShowError(true)}
                />
              </Flex>
            </Flex>
          </Form>
        );
      }}
    </Formik>
  );
});

export default ClassForm;

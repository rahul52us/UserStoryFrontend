import { useState } from "react";
import { Formik, Form, FieldArray } from "formik";
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
import { observer } from "mobx-react-lite";
import { QuizCategoryPara } from "./utils/dto";
import CustomSubmitBtn from "../../../../../config/component/Button/CustomSubmitBtn";
import store from "../../../../../store/store";
import { BiQuestionMark } from "react-icons/bi";
import QuizCreateValidation from "./utils/validation";

const QuizCategoryForm = observer(
  ({ submitForm, initialValues }: QuizCategoryPara) => {
    const [sections, setSections] = useState([]);
    const {
      classStore: { classes },
    } = store;
    const [showError, setShowError] = useState(false);

    const handleSections = (_id: any, setFieldValue: any) => {
      setFieldValue("section", null);
      const sec: any = classes.data.filter((item: any) => item._id === _id);
      if (sec.length) {
        setSections(sec[0].sections);
        if (sec.length === 1) {
        }
      } else {
        setSections([]);
      }
    };

    const getCategoryError = (errors: any, type: string, index: number) => {
      if (type === "title") {
        if (errors.categories && errors.categories[index]) {
          return errors.categories[index].title;
        }
        return undefined;
      }
      if (type === "description") {
        if (errors.categories && errors.categories[index]) {
          return errors.categories[index].description;
        }
        return undefined;
      }
    };

    return (
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={QuizCreateValidation}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            submitForm(values, setSubmitting, resetForm);
          }}
        >
          {({ values, errors, handleChange, isSubmitting, setFieldValue }) => {
            console.log(errors);

            return (
              <Form>
                <Flex
                  flexDirection="column"
                  justifyContent="space-between"
                  m={-6}
                >
                  <Box
                    mt={1}
                    p={5}
                    overflowY="auto"
                    overflowX={"hidden"}
                    flex="1"
                    minH="85vh"
                    maxH={"85vh"}
                  >
                    <Box>
                      <CustomInput
                        label="Title"
                        type="text"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        error={errors.title}
                        placeholder="Enter the title"
                        required
                        showError={showError}
                      />
                      <Grid
                        gridTemplateColumns={{ md: "1fr 1fr" }}
                        columnGap={3}
                      >
                        <CustomInput
                          type="select"
                          label="Class"
                          required
                          placeholder="Search Class"
                          name="class"
                          isSearchable
                          value={values.class}
                          getOptionLabel={(option: any) => option.name}
                          getOptionValue={(option: any) => option._id}
                          options={classes.data}
                          onChange={(e: any) => {
                            handleSections(e?._id, setFieldValue);
                            setFieldValue("class", e);
                          }}
                          error={errors.class}
                          showError={showError}
                        />
                        <CustomInput
                          type="select"
                          label="Section"
                          required
                          placeholder="Search search"
                          name="section"
                          isSearchable
                          error={errors.section}
                          value={values.section}
                          getOptionLabel={(option: any) => option.name}
                          getOptionValue={(option: any) => option._id}
                          options={sections}
                          onChange={(e: any) => {
                            setFieldValue("section", e);
                          }}
                          showError={showError}
                        />
                      </Grid>
                      <CustomInput
                        label="Description"
                        type="textarea"
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        error={errors.description}
                        required
                        showError={showError}
                      />
                    </Box>
                    <Divider mt={3} />
                    <Grid gap={2} mt={3}>
                      <Flex gap={3} alignItems="center">
                        <Heading fontSize={"2xl"}>CREATE CATEGORIES</Heading>
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
                      <FieldArray name="categories">
                        {({ push, remove }) => (
                          <Box>
                            {values.categories.map(
                              (section: any, index: number) => (
                                <Box key={index} mb="20px">
                                  <CustomInput
                                    label="Category"
                                    type="text"
                                    name={`categories.${index}.title`}
                                    value={section.title}
                                    onChange={handleChange}
                                    placeholder="Enter the Title"
                                    showError={showError}
                                    error={getCategoryError(
                                      errors,
                                      "title",
                                      index
                                    )}
                                  />
                                  <CustomInput
                                    label="Description"
                                    type="textarea"
                                    name={`categories.${index}.description`}
                                    value={section.description}
                                    onChange={handleChange}
                                    placeholder="Description"
                                    showError={showError}
                                    error={getCategoryError(
                                      errors,
                                      "description",
                                      index
                                    )}
                                  />
                                  <Button
                                    colorScheme="red"
                                    variant="outline"
                                    size="sm"
                                    mt="10px"
                                    onClick={() => remove(index)}
                                  >
                                    Remove Section
                                  </Button>
                                </Box>
                              )
                            )}
                            <Button
                              colorScheme="blue"
                              variant="outline"
                              size="sm"
                              mb="10px"
                              onClick={() =>
                                push({ title: "", description: "" })
                              }
                            >
                              Add Section
                            </Button>
                          </Box>
                        )}
                      </FieldArray>
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
      </div>
    );
  }
);

export default QuizCategoryForm;

import { Box, Button, Container, Grid, Flex } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";

import CustomInput from "../../../config/component/CustomInput/CustomInput";
import { Form, Formik, FieldArray } from "formik";
import { observer } from "mobx-react-lite";
// import { useState } from "react";

const AddingparaForm = observer(() => {
  //   const [setItems, isSetItems] = useState(false);

  //   const handleAddRows = () => {
  //     isSetItems(true);
  //   };

  return (
    <Container maxW={"7xl"} my={{ base: 2, md: 14 }}>
      <Formik
        initialValues={{
          text1: "",
          text2: "",
          category: "",
          answers: [
            {
              answer: "",
              description: "",
              answerType: "",
            },
          ],
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          setFieldValue,
          values,
          isSubmitting,
        }) => {
          console.log(values);
          return (
            <Form onSubmit={handleSubmit}>
              <Flex justifyContent="space-between" alignItems={"center"}>
                <Box>Form adding input when we click on add button</Box>
                <Box w="lg">
                  <CustomInput
                    type="select"
                    placeholder="Select Category"
                    name="category"
                    label="Category"
                    value={values.category}
                    onChange={(e: any) => {
                      setFieldValue("category", e);
                    }}
                    required
                    options={[
                      { value: "Low", label: "Low" },
                      { value: "Medium", label: "Medium" },
                      { value: "High", label: "High" },
                    ]}
                  />
                </Box>
              </Flex>

              <Grid
                templateColumns={{ md: "1fr 1fr 3rem" }}
                gap={{ base: 4, md: 6 }}
              >
                <CustomInput
                  type="text"
                  placeholder="text"
                  label="text1"
                  name="text1"
                  value={values.text1}
                  onChange={handleChange}
                />
                <CustomInput
                  type="text"
                  placeholder="text"
                  label="text2"
                  name="text2"
                  value={values.text2}
                  onChange={handleChange}
                />
              </Grid>
              <FieldArray name="answers">
                {({ push, remove }) => (
                  <>
                    {values.answers.map((answer, index) => (
                      <Grid
                        alignItems={"center"}
                        gap={6}
                        templateColumns="1fr 3rem"
                      >
                        <Grid>
                          <Grid templateColumns={"1fr 1fr"} gap={6}>
                            <CustomInput
                              type="select"
                              placeholder="Select Answer type"
                              // name="answerType"
                              name={`answers.${index}.answerType`}
                              label="Answer Type"
                              value={answer.answerType}
                              onChange={(e: any) => {
                                setFieldValue(`answers.${index}.answerType`, e);
                              }}
                              required
                              options={[
                                { value: "Low", label: "Low" },
                                { value: "Medium", label: "Medium" },
                                { value: "High", label: "High" },
                              ]}
                            />
                            <CustomInput
                              type="text"
                              placeholder="text"
                              label="text3"
                              name="text1"
                              value={answer.answer}
                              onChange={handleChange}
                            />
                          </Grid>
                          <CustomInput
                            type="textarea"
                            placeholder="text"
                            label="text24"
                            name={`answers.${index}.description`}
                            value={answer.description}
                            onChange={handleChange}
                          />
                        </Grid>

                        <Button color="red.500" onClick={() => remove(index)}>
                          <Box fontSize="1.5rem">
                            <MdClose />
                          </Box>
                        </Button>
                      </Grid>
                    ))}

                    <Flex mt={6} justifyContent="space-between">
                      <Button
                        type="submit"
                        bg="blue.400"
                        color="white"
                        _hover={{ bg: "blue.500" }}
                        isLoading={isSubmitting}
                      >
                        Submit
                      </Button>
                      <Button
                        onClick={() => push({ title: "", description: "" })}
                        bg="teal.300"
                        color="white"
                        _hover={{ bg: "teal.400" }}
                      >
                        Add Topic
                      </Button>
                    </Flex>
                  </>
                )}
              </FieldArray>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
});

export default AddingparaForm;

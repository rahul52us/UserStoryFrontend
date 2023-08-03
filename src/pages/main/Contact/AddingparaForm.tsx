import { Box, Button, Container, Flex, Grid } from "@chakra-ui/react";
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
      <Box>Form adding input when we click on add button</Box>
      <Formik
        initialValues={{
          text1: "",
          text2: "",
          topics: [
            {
              topic: "",
              description: "",
            },
          ],
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, handleChange, values, isSubmitting }) => {
          console.log(values);
          return (
            <Form onSubmit={handleSubmit}>
              <Grid templateColumns={{ md: "1fr 1fr" }} gap={6}>
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
              <FieldArray name="topics">
                {({ push, remove }) => (
                  <>
                    {values.topics.map((topic, index) => (
                      <Box>
                        <CustomInput
                          type="text"
                          placeholder="text"
                          label="text3"
                          name="text1"
                          value={topic.topic}
                          onChange={handleChange}
                        />
                        <CustomInput
                          type="textarea"
                          placeholder="text"
                          label="text24"
                          name={`topics.${index}.description`}
                          value={topic.description}
                          onChange={handleChange}
                        />
                        <Button
                          colorScheme="red"
                          variant="outline"
                          size="sm"
                          mt="10px"
                          onClick={() => remove(index)}
                        >
                          Remove Topic
                        </Button>
                      </Box>
                    ))}
                    <Button
                      colorScheme="blue"
                      variant="outline"
                      size="sm"
                      mb="10px"
                      onClick={() => push({ title: "", description: "" })}
                    >
                      Add Topic
                    </Button>
                  </>
                )}
              </FieldArray>

              <Flex gap={4} mt={3}>
                <Button
                  //   onClick={() => handleAddRows()}
                  bg="teal.300"
                  color="white"
                  _hover={{ bg: "teal.400" }}
                >
                  AddRows
                </Button>
                <Button bg="red.500" color="white" _hover={{ bg: "red.600" }}>
                  RemoveRows
                </Button>
              </Flex>
              <Button
                type="submit"
                mt={3}
                bg="blue.400"
                color="white"
                _hover={{ bg: "blue.500" }}
                isLoading={isSubmitting}
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
});

export default AddingparaForm;

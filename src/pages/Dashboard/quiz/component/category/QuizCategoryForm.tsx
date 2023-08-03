import { Formik, FieldArray, Form } from "formik";
import { Box, Button } from "@chakra-ui/react";
import categoryValidation from "./utils/validation";
import CustomInput from "../../../../../config/component/CustomInput/CustomInput";
import { observer } from "mobx-react-lite";
import { QuizCategoryPara } from "./utils/dto";


const QuizCategoryForm = observer(({ submitForm, initialValues }: QuizCategoryPara) => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={categoryValidation}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          submitForm(values, setSubmitting, resetForm);
        }}
      >
        {({ values, errors, handleChange, isSubmitting }) => {
          const getTopicError = (err: any) => {
            if (err || err?.title) return err.title;
          };
          const getDescriptionError = (err: any) => {
            if (err || err?.description) return err.description;
          };
          return (
            <Form>
              <Box mb="20px">
                <CustomInput
                  label="Category"
                  type="text"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  error={errors.title}
                  required
                />
                <CustomInput
                  label="Description"
                  type="text"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  error={errors.description}
                  required
                />
              </Box>
              <FieldArray name="topics">
                {({ push, remove }) => (
                  <Box>
                    {values.topics.map((topic, index) => (
                      <Box key={index} mb="20px">
                        <CustomInput
                          label="topic"
                          type="text"
                          name={`topics.${index}.title`}
                          value={topic.title}
                          onChange={handleChange}
                          error={getTopicError(errors.topics?.[index])}
                          required
                        />
                        <CustomInput
                          label="Description"
                          type="textarea"
                          name={`topics.${index}.description`}
                          value={topic.description}
                          onChange={handleChange}
                          error={getDescriptionError(errors.topics?.[index])}
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
                  </Box>
                )}
              </FieldArray>
              <Button type="submit" isLoading={isSubmitting}>
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
});

export default QuizCategoryForm;

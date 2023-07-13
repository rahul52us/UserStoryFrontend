import { Card } from "@chakra-ui/react";
import QuizCategoryForm from "./QuizCategoryForm";
import { observer } from "mobx-react-lite";
import store from "../../../../../store/store";
import { QuizCategoryValue } from "./utils/dto";

const AddQuizCategory = observer(() => {
  const {
    quiz: { createCategory },
    auth: { openNotification },
  } = store;

  const initialValues = {
    title: "",
    description: "",
    topics: [{ title: "", description: "" }],
  };

  const addCategoryStore = (
    values: QuizCategoryValue,
    setSubmitting: (val: boolean) => void,
    resetForm: () => void
  ) => {
    createCategory(values)
      .then((data: any) => {
        openNotification({
          title: "Create Successfully",
          message: data.message,
        });
        resetForm();
      })
      .catch((err: any) => {
        if (err.statusCode === 422) {
          openNotification({
            title: "Create Failed",
            message: err.data?.message,
            type: "error",
          });
        } else {
          openNotification({
            title: "Create Failed",
            message: err?.message,
            type: "error",
          });
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div>
      <Card p={2}>
        <QuizCategoryForm
          submitForm={addCategoryStore}
          initialValues={initialValues}
        />
      </Card>
    </div>
  );
});

export default AddQuizCategory;

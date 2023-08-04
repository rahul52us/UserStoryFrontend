import QuizCategoryForm from "./QuizCategoryForm";
import { observer } from "mobx-react-lite";
import store from "../../../../../store/store";
import { QuizCategoryValue } from "./utils/dto";

const AddQuizCategory = observer(() => {
  const {
    quiz: { CreateQuiz },
    auth: { openNotification },
  } = store;

  const initialValues = {
    title: "",
    description: "",
    class: undefined,
    section: undefined,
    categories: [{ title: "", description: "" }],
  };

  const addCategoryStore = (
    values: QuizCategoryValue,
    setSubmitting: (val: boolean) => void,
    resetForm: () => void
  ) => {
    if (values.categories === 0) {
      delete values.categories;
    }
    CreateQuiz({
      ...values,
      class: values.class?._id,
      section: values.section?._id,
    })
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
    <QuizCategoryForm
      submitForm={addCategoryStore}
      initialValues={initialValues}
    />
  );
});

export default AddQuizCategory;

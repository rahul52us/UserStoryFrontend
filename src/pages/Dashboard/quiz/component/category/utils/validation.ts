import * as Yup from "yup";

const categoryValidation = Yup.object().shape({
  title: Yup.string()
    .min(3, "Title must be at least 3 characters")
    .max(120, "Title must not exceed 120 characters")
    .required("Title is required"),
  description: Yup.string()
    .min(3, "description must be at least 3 characters")
    .max(220, "Description must not exceed 220 characters"),
});

const QuizCreateValidation = Yup.object().shape({
  title: Yup.string()
    .min(3, "Title must be at least 3 characters")
    .max(120, "Title must not exceed 120 characters")
    .trim()
    .required("Title is required"),
  class: Yup.mixed().required("Select the Class").typeError("Select the Class"),
  section: Yup.mixed()
    .required("Select the Section")
    .typeError("Select the Section"),
  description: Yup.string()
    .trim()
    .min(3, "description must be at least 3 characters")
    .max(220, "Description must not exceed 220 characters"),
    categories: Yup.array().of(categoryValidation),
});

export default QuizCreateValidation;

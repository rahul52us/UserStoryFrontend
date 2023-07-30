import * as Yup from "yup";

const sectionValidation = Yup.object().shape({
  name: Yup.string().trim()
    .min(3, "Section Name must be at least 3 characters")
    .max(120, "Section Name must not exceed 120 characters")
});

export const ClassValidationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(3, "Class Name should be atleast of 3 characters")
    .max(80, "Class Name cannot be greater than 80 characters")
    .required("Class Name is required"),
  startYear: Yup.date().required("Start Year is required"),
  endYear: Yup.date()
    .required("End Year is required")
    .min(Yup.ref("startYear"), "End Year must be later than Start Year"),
  medium: Yup.mixed()
    .required("Select the medium")
    .typeError("select the medium"),
  sections: Yup.array().of(sectionValidation),
});

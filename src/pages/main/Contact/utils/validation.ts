import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const ContactValidation = Yup.object().shape({
  userName: Yup.string()
    .email("Invalid username format")
    .required("Username is required"),

  firstName: Yup.string()
    .required("First Name is Required")
    .max(50, "Max 50 characters allowed"),

  lastName: Yup.string()
    .required("Last Name is Required")
    .max(50, "Max 50 characters allowed"),
  phone: Yup.string()
    .required("Phone number is Required")
    .matches(phoneRegExp, "Phone number is not valid"),
});

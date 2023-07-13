import * as Yup from 'yup';

export const LoginValidation = Yup.object().shape({
  username: Yup.string()
    .email('Invalid username format')
    .required('Username is required'),
    password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number"
    ),
});

export const OrganisationCreateValidation = Yup.object().shape({
  first_name: Yup.string()
    .min(2,'First Name atleast of 2 characters')
    .max(60,'First Name cannot greater than 60 characters')
    .required('First Name is required'),
  last_name: Yup.string()
    .min(2,'Last Name atleast of 2 characters')
    .max(60,'Last Name cannot greater than 60 characters')
    .required('Last Name is required'),
  company_name: Yup.string()
    .min(2,'Organisation Name atleast of 2 characters')
    .max(60,'Organisation Name cannot greater than 250 characters')
    .required('Organisation is required'),
  username: Yup.string()
    .email('Invalid username format')
    .required('Username is required'),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number"
    ),
});


export const ForgotEmailValidation = Yup.object().shape({
  username: Yup.string()
    .email('Invalid email format')
    .required('Username is required'),
});


export const ResetPasswordValidation = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number"
    ),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

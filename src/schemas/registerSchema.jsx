import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup
  .string()
  .required("Name is Required")
  .min(3, "Name must be at least 3 characters")
  .max(25, "Name must be at most 25 characters"),
  email: yup
    .string()
    .required("Email is Required")
    .email("Enter a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(30, "password must be at most 30 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is Required")
    .oneOf([yup.ref("password")], "Passwords does not match"),
});

export default registerSchema;

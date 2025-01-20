import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is Required")
    .email("Enter a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(30, "password must be at most 30 characters"),
});

export default loginSchema;

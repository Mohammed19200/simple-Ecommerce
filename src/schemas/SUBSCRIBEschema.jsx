import * as yup from "yup";

const SUBSCRIBEschema = yup.object().shape({
  email: yup
    .string()
    .required("Email is Required")
    .email("Enter a valid email"),
});

export default SUBSCRIBEschema;

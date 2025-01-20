import * as yup from "yup";

const CheckoutSchemadelivery = yup.object().shape({
  Name: yup
    .string()
    .required("First Name is Required")
    .min(10, "Name must be at least 10 characters")
    .max(50, "Name must be at most 50 characters"),
  Address: yup
    .string()
    .required("Address is Required")
    .min(30, "Address must be at least 30 characters")
    .max(85, "Address must be at most 85 characters"),
  City: yup
    .string()
    .required("City is Required")
    .min(5, "at least 5 characters")
    .max(30, "at most 30 characters"),
  State: yup
    .string()
    .required("State is Required")
    .min(5, "at least 5 characters")
    .max(15, "at most 15 characters"),
  ZipCode: yup
    .string()
    .required("Zip Code is required")
    .min(3, "at least 3 Numbers")
    .max(5, "at most 5 characters"),
});
export default CheckoutSchemadelivery;

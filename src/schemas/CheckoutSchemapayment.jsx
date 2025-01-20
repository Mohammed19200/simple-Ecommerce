import * as yup from "yup";

const CheckoutSchemapayment = yup.object().shape({
    CardNumber: yup
        .string()
        .required("Zip Code is required")
        .min(16, "Number be at least 16 Numbers")
        .max(16, "Number must be at most 16 characters"),
    Expirationdate: yup
        .string()
        .required("Expiration date is Required"),

    SecurityCode: yup
        .string()
        .required("Zip Code is required")
        .min(4, "Security Code be at least 4 Numbers")
        .max(4, "Security Code be at most 4 characters"),
    cardholdername: yup
        .string()
        .required("Cardholder Name is Required")
        .min(10, "Cardholder Name must be at least 10 characters")
        .max(50, "Cardholder Name must be at most 50 characters"),
    Address: yup.string()
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
        .required("Code is required")
        .min(3, "at least 3 Numbers")
        .max(5, "at most 5 characters"),
});
export default CheckoutSchemapayment;
import * as yup from "yup";

const MessageSchema = yup.object().shape({
    Name: yup
    .string()
    .required("Name is Required")
    .min(3, "Name must be at least 3 characters")
    .max(25, "Name must be at most 25 characters"),
    Email: yup
        .string()
        .required("Email is Required")
        .email("Enter a valid email"),
    Subject: yup
    .string()
    .required("Subject is Required")
    .min(20, "Subject must be at least 20 characters")
    .max(100, "Subject must be at most 100 characters"),
    Message: yup
    .string()
    .required("Message is Required")
    .min(20, "Message must be at least 20 characters")
    .max(300, "Message must be at most 300 characters"),
});

export default MessageSchema;
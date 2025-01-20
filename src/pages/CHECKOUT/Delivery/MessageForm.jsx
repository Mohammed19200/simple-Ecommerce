import { ErrorMessage, Field, Form, Formik } from "formik";
import Error from "../../../components/Error/Error";
import { Fragment } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import MessageSchema from "../../../schemas/MessageSchema";
import { useRecoilState } from "recoil";
import { authData } from "../../../atoms/authAtom";
import { useNavigate } from "react-router-dom";

export default function MessageForm() {
    const [user] = useRecoilState(authData);
    let navigate = useNavigate();

    function handlemessage(values, actions) {
        const newDatamessage = { messageinfo: { ...values } };
        if (!user.isAuth) {
            navigate("/login");
        } else {
            axios.patch(`http://localhost:3004/users/${user.user.id}`, newDatamessage).then((data) => {
                actions.resetForm();
                toast.success("Meaage Send Successfully");
                console.log(data.data)
            });
        }
    }

    return (
        <Fragment>
            <Formik
                initialValues={{
                    Name: "",
                    Email: "",
                    Subject: "",
                    Message: "",
                }}
                validationSchema={MessageSchema}
                onSubmit={handlemessage}
            >
                {() => {
                    return (
                        <div className='col-11 messageformstyle'>
                            <Form className="col-12 formmessage">
                                <h3 className='titleformstyle'>Drop us message</h3>
                                <div className="inputanderrormessagestyle col-12">
                                    <Field className=' col-11 col-md-10 col-lg-8 inputstylee' type="text" name="Name" placeholder="Enter your Name" />
                                    <Error>
                                        <ErrorMessage name="Name" />
                                    </Error>
                                </div>
                                <div className="inputanderrormessagestyle col-12">
                                    <Field className=' col-11 col-md-10 col-lg-8 inputstylee' type="text" name="Email" placeholder="Enter your Email" />
                                    <Error>
                                        <ErrorMessage name="Email" />
                                    </Error>
                                </div>
                                <div className="inputanderrormessagestyle col-12">
                                    <Field className=' col-11 col-md-10 col-lg-8 inputstylee' type="text" name="Subject" placeholder="Enter your Subject" />
                                    <Error>
                                        <ErrorMessage name="Subject" />
                                    </Error>
                                </div>
                                <div className="inputanderrormessagestyle col-12">
                                    <Field className=' col-11 col-md-10 col-lg-8 inputstylee' type="text" name="Message" placeholder="Enter your Message" />
                                    <Error>
                                        <ErrorMessage name="Message" />
                                    </Error>
                                </div>
                                <button type="submit" className='buttonstyle'>SUBMIT</button>
                            </Form>
                        </div>
                    );
                }}
            </Formik>
        </Fragment>
    )
}

// function handlemessage(values, actions) {
//     const newDatamessage = { messageinfo: {...values} };

//     axios.patch(`http://localhost:3004/users/${user.user.id}`, newDatamessage).then((data) => {
//         actions.resetForm();
//         toast.success("Meaage Send Successfully");
//         console.log(data.data)
//     });
// }
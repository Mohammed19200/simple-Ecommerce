import React, { useEffect } from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import Error from "../../../components/Error/Error";
import { Fragment } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import WOW from 'wowjs';
import SUBSCRIBEschema from '../../../schemas/SUBSCRIBEschema';
import { useRecoilState } from 'recoil';
import { authData } from '../../../atoms/authAtom';
import { useNavigate } from 'react-router-dom';

export default function SUBSCRIBE() {
    let navigate = useNavigate();
    const [user] = useRecoilState(authData);

    function handleSUBSCRIBE(values, actions) {
        const newDatahandleSUBSCRIBE = { subscripeinfo: { ...values } };

        if (!user.isAuth) {
            navigate("/login");
        } else {
            axios.patch(`http://localhost:3004/users/${user.user.id}`, newDatahandleSUBSCRIBE).then((data) => {
                actions.resetForm();
                toast.success("Send Successfully");
                console.log(data.data)
            });
        }
    }
    useEffect(() => {
        new WOW.WOW({
            live: true
        }).init();
    }, [])

    return (
        <Fragment>
            <Formik
                initialValues={{
                    email: ""
                }}
                validationSchema={SUBSCRIBEschema}
                onSubmit={handleSUBSCRIBE}
            >
                {() => {
                    return (
                        <Form className="col-12 formSUBSCRIBE">
                            <div className="">
                                <Field className='subscripeinput' type="text" name="email" placeholder="Enter Your Email" />

                            </div>
                            <button type="submit" className='SUBSCRIBEbutton '>SUBSCRIBE</button>
                            <div className='col-11 errorsubscripe'>
                                <Error>
                                    <ErrorMessage name="email" />
                                </Error>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </Fragment>
    )
}


// function handleSUBSCRIBE(values, actions) {
//     const newDatahandleSUBSCRIBE = { subscripeinfo: {...values} };

//     axios.patch(`http://localhost:3004/users/${user.user.id}`, newDatahandleSUBSCRIBE).then((data) => {
//         actions.resetForm();
//         toast.success("Send Successfully");
//         console.log(data.data)
//     });
// }
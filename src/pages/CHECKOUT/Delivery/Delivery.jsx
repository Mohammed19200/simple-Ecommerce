import { ErrorMessage, Field, Form, Formik } from "formik";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import CheckoutSchemadelivery from "../../../schemas/CheckoutSchemadelivery";
import Error from "../../../components/Error/Error";
import WOW from 'wowjs';
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../../atoms/cartAtom";
import { authData } from "../../../atoms/authAtom";

export default function Delivery() {

    const [cartData] = useRecoilState($cartAtom);
    const [data, setdata] = useState([])
    const savedatacart = JSON.parse(localStorage.getItem("CartDataOrder"));
    useEffect(() => {
        setdata(savedatacart)
    }, [])
    const [user] = useRecoilState(authData);
    function savedata() {
        localStorage.setItem('CartDataOrder', JSON.stringify(cartData));
        const newData = { ordernew: [...cartData], orderold: [...data] };
        axios.patch(`http://localhost:3004/users/${user.user.id}`, newData).then(data => {
            console.log(data.data)
        })
    }

    function handlecheckoutdelivery(values, actions) {
        const newDatacheckoutdelivery = { deliveryinfo: {...values} };

        axios.patch(`http://localhost:3004/users/${user.user.id}`, newDatacheckoutdelivery).then((data) => {
            actions.resetForm();
            toast.success("Your order has been executed , the products will be prepared");
            console.log(data.data)
        });
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
                    Name: "",
                    Address: "",
                    City: "",
                    State: "",
                    ZipCode: "",
                }}
                validationSchema={CheckoutSchemadelivery}
                onSubmit={handlecheckoutdelivery}
            >
                {() => {
                    return (
                        <div className='col-11 CHECKOUTbigestdiv1one wow animate__animated animate__fadeInLeft animate__slow' data-wow-delay="0.1s" >
                            <Form className="col-12 formcheckout">
                                <div>

                                    <h1 className='checkoutfirstdiv1h1 col-12'>Delivery</h1>


                                    <div className='col-12 CHECKOUTbigestdiv1one1'>
                                        <div className="inputanderrormessagestyle col-12">
                                            <Field className='checkoutfirstdiv1input col-12 col-md-11' type="text" name="Name" placeholder="Enter Your Name" />
                                            <Error>

                                                <ErrorMessage name="Name" />
                                            </Error>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="inputanderrormessagestyle col-12">
                                            <Field className='checkoutfirstdiv1input col-12 col-md-11' type="text" name="Address" placeholder="Address" />
                                            <Error>
                                                <ErrorMessage name="Address" />
                                            </Error>
                                        </div>
                                    </div>
                                    <div className='col-12 CHECKOUTbigestdiv1one2 col-12'>
                                        <div className="inputanderrormessagestyle col-12 col-md-3">
                                            <Field className='checkoutfirstdiv1input col-12' type="text" name="City" placeholder="City" />
                                            <Error>
                                                <ErrorMessage name="City" />
                                            </Error>
                                        </div>
                                        <div className="inputanderrormessagestyle col-12 col-md-3">
                                            <Field className='checkoutfirstdiv1input col-12' type="text" name="State" placeholder="State" />
                                            <Error>
                                                <ErrorMessage name="State" />
                                            </Error>
                                        </div>
                                        <div className="inputanderrormessagestyle col-12 col-md-3">
                                            <Field className='checkoutfirstdiv1input col-12' type="number" name="ZipCode" placeholder="Zip Code" />
                                            <Error>
                                                <ErrorMessage name="ZipCode" />
                                            </Error>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={savedata} type="submit" className='col-12 col-md-11 addtocartbtnnn11checkout' col-12>Pay Now</button>
                            </Form>
                        </div>
                    );
                }}
            </Formik>
        </Fragment>
    )
}
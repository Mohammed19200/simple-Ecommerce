import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Error from "../../../components/Error/Error";
import { Fragment } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import CheckoutSchemapayment from "../../../schemas/CheckoutSchemapayment";
import { useRecoilState } from "recoil";
import { $cartAtom } from "../../../atoms/cartAtom";
import { authData } from "../../../atoms/authAtom";
export default function Paymant() {
  const [cartData] = useRecoilState($cartAtom);
  const [data, setdata] = useState([]);
  const savedatacart = JSON.parse(localStorage.getItem("CartDataOrder"));
  useEffect(() => {
    setdata(savedatacart);
  }, []);
  const [user] = useRecoilState(authData);
  function savedata() {
    localStorage.setItem("CartDataOrder", JSON.stringify(cartData));
    const newData = { ordernew: cartData, orderold: [...data] };
    axios
      .patch(`http://localhost:3004/users/${user.user.id}`, newData)
      .then((data) => {
        console.log(data.data);
      });
  }

  function handlecheckoutpayment(values, actions) {
    const newDatacheckoutpaymant = { paymentinfo: { ...values } };

    axios
      .patch(
        `http://localhost:3004/users/${user.user.id}`,
        newDatacheckoutpaymant
      )
      .then((data) => {
        actions.resetForm();
        toast.success(
          "Your order has been executed , the products will be prepared"
        );
        console.log(data.data);
      });
  }
  return (
    <Fragment>
      <Formik
        initialValues={{
          CardNumber: "",
          Expirationdate: "",
          SecurityCode: "",
          cardholdername: "",
          Address: "",
          City: "",
          State: "",
          ZipCode: "",
        }}
        validationSchema={CheckoutSchemapayment}
        onSubmit={handlecheckoutpayment}
      >
        {() => {
          return (
            <div
              className="col-11 CHECKOUTbigestdiv1one wow animate__animated animate__fadeInLeft animate__slow"
              data-wow-delay="0.1s"
            >
              <Form className="col-12 formcheckout">
                <div>
                  <h1 className="checkoutfirstdiv1h1 col-12">Payment</h1>
                  <div className="col-12 CHECKOUTbigestdiv1one1">
                    <div className="inputanderrormessagestyle col-12">
                      <Field
                        className="checkoutfirstdiv1input col-12 col-md-11"
                        type="number"
                        name="CardNumber"
                        placeholder="Your Credit Card Number"
                      />
                      <Error>
                        <ErrorMessage name="CardNumber" />
                      </Error>
                    </div>
                    <div className="inputanderrormessagestyle col-12">
                      <Field
                        className="checkoutfirstdiv1input col-12 col-md-11"
                        type="date"
                        name="Expirationdate"
                        placeholder="Expiration Date (MM / YY )"
                      />
                      <Error>
                        <ErrorMessage name="Expirationdate" />
                      </Error>
                    </div>
                  </div>
                  <div className="inputanderrormessagestyle col-12">
                    <Field
                      className="checkoutfirstdiv1input col-12 col-md-11"
                      type="number"
                      name="SecurityCode"
                      placeholder="Security Code In Card (CVV)"
                    />
                    <Error>
                      <ErrorMessage name="SecurityCode" />
                    </Error>
                  </div>
                  <div className="col-12 CHECKOUTbigestdiv1one1">
                    <div className="inputanderrormessagestyle col-12">
                      <Field
                        className="checkoutfirstdiv1input col-12 col-md-11"
                        type="text"
                        name="cardholdername"
                        placeholder="Cardholder Name"
                      />
                      <Error>
                        <ErrorMessage name="cardholdername" />
                      </Error>
                    </div>
                  </div>
                  <div className="inputanderrormessagestyle col-12">
                    <Field
                      className="checkoutfirstdiv1input col-12 col-md-11"
                      type="text"
                      name="Address"
                      placeholder="Address"
                    />
                    <Error>
                      <ErrorMessage name="Address" />
                    </Error>
                  </div>
                  <div className="col-12 CHECKOUTbigestdiv1one2">
                    <div className="inputanderrormessagestyle col-12 col-md-3">
                      <Field
                        className="checkoutfirstdiv1input col-12"
                        type="text"
                        name="City"
                        placeholder="City"
                      />
                      <Error>
                        <ErrorMessage name="City" />
                      </Error>
                    </div>
                    <div className="inputanderrormessagestyle col-12 col-md-3">
                      <Field
                        className="checkoutfirstdiv1input col-12"
                        type="text"
                        name="State"
                        placeholder="State"
                      />
                      <Error>
                        <ErrorMessage name="State" />
                      </Error>
                    </div>
                    <div className="inputanderrormessagestyle col-12 col-md-3">
                      <Field
                        className="checkoutfirstdiv1input col-12"
                        type="number"
                        name="ZipCode"
                        placeholder="Zip Code"
                      />
                      <Error>
                        <ErrorMessage name="ZipCode" />
                      </Error>
                    </div>
                  </div>
                </div>
                <button
                  onClick={savedata}
                  type="submit"
                  className="col-12 col-md-11 addtocartbtnnn11checkout"
                  col-12
                >
                  Pay Now
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </Fragment>
  );
}

import { ErrorMessage, Field, Form, Formik } from "formik";
import "./Register.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import registerSchema from "../../schemas/registerSchema";
import Error from "../../components/Error/Error";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();

  function handleRegister(values, actions) {
    const newData = { ...values, cart: [], favorite: [] };
    delete newData.confirmPassword;

    axios.post("http://localhost:3004/users", newData).then(() => {
      toast.success("Email Registerd successfully");
      actions.resetForm();
      navigate("/login");
    });
  }

  return (
    <div className="col-12 biiiigdivv">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registerSchema}
        onSubmit={handleRegister}
      >
        {() => {
          return (
            <div
              className="loginbigdivform col-12 wow animate__animated animate__fadeInDownBig"
              data-wow-delay="0.5s"
            >
              <Form className="authh-cont col-11 col-md-8 col-lg-5">
                <div className="input-group">
                  <label className="labellogin" htmlFor="">
                    Full Name:{" "}
                  </label>
                  <Field type="text" name="name" placeholder="Full Name" />
                  <Error>
                    <ErrorMessage name="name" />
                  </Error>
                </div>
                <div className="input-group">
                  <label className="labellogin" htmlFor="">
                    Email:{" "}
                  </label>
                  <Field type="email" name="email" placeholder="Enter Email" />
                  <Error>
                    <ErrorMessage name="email" />
                  </Error>
                </div>
                <div className="input-group">
                  <label className="labellogin" htmlFor="">
                    Password:{" "}
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                  />
                  <Error>
                    <ErrorMessage name="password" />
                  </Error>
                </div>
                <div className="input-group">
                  <label className="labellogin" htmlFor="">
                    Confirm Password:{" "}
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Enter Confirm Password"
                  />
                  <Error>
                    <ErrorMessage name="confirmPassword" />
                  </Error>
                </div>
                <p>
                  Already have an account?{" "}
                  <Link
                    className="text-decoration-none colorlinklogin"
                    to="/login"
                  >
                    Login
                  </Link>
                </p>
                <div className="d-flex justify-content-end">
                  <Button className="buttonlogin" type="submit">
                    Register
                  </Button>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

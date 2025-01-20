import { ErrorMessage, Field, Form, Formik } from "formik";
import "./Login.css";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Error from "../../components/Error/Error";
import { Link } from "react-router-dom";
import loginSchema from "../../schemas/loginSchema";
import axios from "axios";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { authData } from "../../atoms/authAtom";
import WOW from 'wowjs';

export default function Login() {

  useEffect(() => {
    new WOW.WOW({
      live: true
    }).init();
  }, [])

  const [auth, setAuth] = useRecoilState(authData);

  console.log(auth);

  function handleLogin(values) {
    axios(
      `http://localhost:3004/users?email=${values.email}&password=${values.password}`
    ).then((data) => {
      if (data.data.length) {
        toast.success("Logged in successfully");
        const authData = {
          isAuth: true,
          user: data.data[0],
        };
        setAuth(authData);
        localStorage.setItem("loggedInData", JSON.stringify(authData));
      } else {
        toast.error("Email or password is not correct");
      }
    });
  }

  return (
    <div className="col-12 biiiigdivv"  >
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {() => {
          return (
            <div className="col-12 wow animate__animated animate__fadeInDownBig" data-wow-delay="0.5s">
              <Form className="auth-contt col-11 col-md-8 col-lg-5">
                <div className="input-group">
                  <label className="labellogin" htmlFor="">Email: </label>
                  <Field type="email" name="email" placeholder="Enter Email" />
                  <Error>
                    <ErrorMessage name="email" />
                  </Error>
                </div>
                <div className="input-group">
                  <label className="labellogin" htmlFor="">Password: </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                  />
                  <Error>
                    <ErrorMessage name="password" />
                  </Error>
                </div>
                <p>
                  Create an account?      <Link className="text-decoration-none colorlinklogin" to="/register">Sign up</Link>
                </p>
                <div className="d-flex justify-content-end">
                  <Button className="buttonlogin" type="submit">Login</Button>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

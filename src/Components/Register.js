import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axiosWithAuth from "../utils/axiosWithAuth";
import {Button} from "reactstrap"

const Register = ({ touched, errors, status, handleSubmit }) => {
  const [register, setRegister] = useState([]);

  useEffect(() => {
    if (status) {
      setRegister([...register, status]);
      localStorage.setItem("loggedIn", "true");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <div>
      <h2>Register here!</h2>
      <Form onSubmit={handleSubmit}>
        {" "}
        <label>
          {" "}
          Name:
          <Field type="text" name="username" placeholder="Username" />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
        </label>
        <label>
          {" "}
          Password:
          <Field type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </label>
        <Button type="submit">Register</Button>{" "}
      </Form>{" "}
    </div>
  );
};

const FormikRegister = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string()
      .min(6)
      .max(16)
      .required()
  }),

  handleSubmit(values, { setStatus }) {
    axiosWithAuth
      .post("/auth/register", values)
      .then(response => {
        console.log(response);
        setStatus(response.data);
      })
      .catch(err => console.log(err.response));
  }
})(Register);

export default FormikRegister;

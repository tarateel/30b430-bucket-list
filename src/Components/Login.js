import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import {Button} from 'reactstrap'

const Login = ({ touched, errors, status, handleSubmit }) => {
  const [login, setLogin] = useState([]);

  useEffect(() => {
    if (status) {
      setLogin([...login, status]);
      localStorage.setItem("loggedIn", "true");
    }
    // eslint-disable-next-line
  }, [status]);

  return (
    <div>
      <h2>Login here!</h2>
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
        <Button type="submit">Login</Button>{" "}
      </Form>{" "}
      Not yet a user?{" "}
      <Link to="/register">
        <Button>Join the fun!</Button>
      </Link>
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string()
      .min(4)
      .max(20)
      .required()
  }),

  handleSubmit(values, { props, resetForm, setSubmitting, setStatus }) {
    axiosWithAuth()
      .post("/auth/login", {}, { auth: values })
      .then(response => {
        console.log(response);
        setStatus(response.data);
        props.loggedStatus();
        resetForm();
        setSubmitting(false);
        localStorage.setItem('token', response.data.payload);
        props.history.push('/Home');
      })
      .catch(err => console.log(err.response));
  }
})(Login);

export default FormikLogin;


// import React, { useState } from 'react';
// import axiosWithAuth from '../utils/axiosWithAuth';

// const Login = (props) => {
//   console.log(props, 'Login.js, line 4, props passed in?')
//   // make a post request to retrieve a token from the api

//   const [user, setUser] = useState({
//     username: '',
//     password: ''
//   });

//   const handleChange = (event) => {
// 		setUser({
// 			...user,
// 			[event.target.name]: event.target.value
// 		});
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     axiosWithAuth()
//       .post('/auth/login', user)
//       .then(response => {
//         console.log(response.data, 'Login.js, line 27, submission response')
//         localStorage.setItem('token', response.data.payload)
//         props.history.push('/Home')
//       })
//       .catch(error => {
//         console.log(error,
//           'Login.js, line 32, error logging in');
//         alert('Login failed. Please try again.');
//       });
//   };
  
//   return (
//     <>
//       <h4>Please enter your username and password to log in.</h4>
//       <form className="form" onSubmit={handleSubmit}>
// 			  <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={user.username}
//           onChange={handleChange}
//         />
// 			  <input
//           type="text"
//           name="password"
//           placeholder="Password"
//           value={user.password}
//           onChange={handleChange}
//         />

// 			<button type="submit">Log In</button>
// 		</form>
//     </>
//   );
// };

// export default Login;


// // // import React from "react";
// // // import styled from "styled-components";
// // // import { BrowserRouter, Route, Link } from 'react-router-dom';
// // // import { withFormik ,Formik, Form, Field } from "formik";
// // // import * as yup from "yup";
// // // import axios from "axios";
// // // import Register from './Register';


// // // const FormDiv = styled.div`
// // //   display: flex;
// // //   flex-direction: column;
// // //   justify-content: space-evenly;
// // //   background
// // //   height: 250px;
// // // `;

// // // const Buttons = styled.div`
// // //   display: flex;
// // //   flex-direction: row;
// // //   justify-content: space-evenly;
// // // `;

// // // export const Button = styled.button`
// // //   width: 75px;
// // //   height: 25px;
// // //   padding: 6px 10px;
// // //     margin: 5px;
// // //     border: none;
// // //     border-radius: 10px;
// // //     color: white;

// // //   ${props => (props.name === 'login' ? `background: #31708E;` : null)}
// // //   ${props => (props.name === 'register' ? `background: #8FC1E3 ;` : null)}


// // // `;

// // // function Login() {
// // //   return (
// // //     <Formik
// // //       initialValues={{ username: "", password: "" }}
// // //       onSubmit={(...LoginUsers) => {
// // //         console.log(LoginUsers, 'KAdeem');
// // //       }}
// // //       render={props => {
// // //         return (
// // //         <BrowserRouter >
// // //           <Form>
// // //             Please Login or Register
// // //             <FormDiv>
// // //               <Field type="text" name="username" placeholder="Username" />
// // //               <Field type="password" name="password" placeholder="Password" />
// // //               <Buttons>
// // //                 <Button type="submit" name='login'> Login</Button>
                  
// // //                     <Link to ='/register' >Register Now</Link>
// // //                     <Route exact path='/register' render = { (props) => <Register {...props} />}/>
// // //                     <Route exact path='/' render= {() => <Login />}/>
                  
// // //               </Buttons>
// // //             </FormDiv>
// // //           </Form>
// // //           </BrowserRouter>
// // //         );
// // //       }}
// // //     />
// // //   );
// // // }

// // // export default withFormik({
// // //   mapPropsToValues: currentValues => {
// // //     return {
// // //       username: currentValues.username || " ",
// // //       password: currentValues.password || " "
// // //     };
// // //   },
// // //   validationSchema: yup.object().shape({
// // //     username: yup.string().required(),
// // //     password: yup.string().min(6).required()
// // //   }),
// // //   handleSubmit: values => {
// // //     console.log(values, 'ksdnksdn');
// // //     axios
// // //       .post("https://buildweek30before30.herokuapp.com/auth", values)
// // //       //if response is valid then log this..
// // //       .then(response => {
// // //         console.log(response);
// // //       })
// // //       //if response is invalid then log this..
// // //       .catch(err => {
// // //         console.log(err);
// // //       });
// // //   }
// // // })(Login);

// // import React, { useState, useEffect } from "react";
// // import { withFormik, Form, Field } from "formik";
// // import * as Yup from "yup";
// // import api from "../utils/axiosWithAuth";
// // import { Link } from "react-router-dom";
// // import {Button} from 'reactstrap'

// // const Login = ({ touched, errors, status, handleSubmit }) => {
// //   const [login, setLogin] = useState([]);

// //   useEffect(() => {
// //     if (status) {
// //       setLogin([...login, status]);
// //       localStorage.setItem("loggedIn", "true");
// //     }
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [status]);

// //   return (
// //     <div>
// //       <h2>Login here!</h2>
// //       <Form onSubmit={handleSubmit}>
// //         {" "}
// //         <label>
// //           {" "}
// //           Name:
// //           <Field type="text" name="username" placeholder="Username" />
// //           {touched.username && errors.username && (
// //             <p className="error">{errors.username}</p>
// //           )}
// //         </label>
// //         <label>
// //           {" "}
// //           Password:
// //           <Field type="password" name="password" placeholder="Password" />
// //           {touched.password && errors.password && (
// //             <p className="error">{errors.password}</p>
// //           )}
// //         </label>
// //         <Button type="submit">Login</Button>{" "}
// //       </Form>{" "}
// //       Not yet a user?{" "}
// //       <Link to="/register">
// //         <Button>Join the fun!</Button>
// //       </Link>
// //     </div>
// //   );
// // };

// // const FormikLogin = withFormik({
// //   mapPropsToValues({ username, password }) {
// //     return {
// //       username: username || "",
// //       password: password || ""
// //     };
// //   },

// //   validationSchema: Yup.object().shape({
// //     username: Yup.string().required(),
// //     password: Yup.string()
// //       .min(4)
// //       .max(20)
// //       .required()
// //   }),

// //   handleSubmit(values, { props, resetForm, setSubmitting, setStatus }) {
// //     api
// //       .post("/auth/login", {}, { auth: values })
// //       .then(response => {
// //         console.log(response);
// //         setStatus(response.data);
// //         props.loggedStatus();
// //         resetForm();
// //         setSubmitting(false);
// //       })
// //       .catch(err => console.log(err.response));
// //   }
// // })(Login);

// // export default FormikLogin;

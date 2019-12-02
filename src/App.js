import React from "react";
import "./App.css";
import { withRouter, Route, Link } from 'react-router-dom';
import { token } from "./utils/axiosWithAuth";
import PrivateRoute from "./Components/PrivateRoute";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from './Components/Register';
import Header from "./Components/Header";
import Footer from './Components/Footer';

function App() {
  const loggedIn = token;

  return (
    <div className="App">
    <Header />
    <nav>
        {loggedIn && <Link to="/home">Home</Link>}
      </nav>
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/home" component={Home} />

    <Footer />
    </div>
  );
}

export default withRouter(App);
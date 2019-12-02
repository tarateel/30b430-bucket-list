import React from "react";
import "./App.css";
import { withRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from "./Components/PrivateRoute";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from './Components/Register';
import Header from "./Components/Header";
import Footer from './Components/Footer';

function App() {

  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/home" component={Home} />
        </Switch>
    <Footer />
    </div>
  );
}

export default withRouter(App);
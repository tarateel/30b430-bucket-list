import React from "react";
import { Switch, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home"
import PrivateRoute from "./PrivateRoute"

function Routes() {
  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <PrivateRoute path="/home" component={Home}></PrivateRoute>
      </Switch>
    </div>
  );
}

export default Routes;

import React from "react";
import { Route, redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("user") ? (
        <Component {...props} />
      ) : (
        redirect("/login")
      )
    }
  />
);

export default PrivateRoute;

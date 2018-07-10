import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({redirectPath, isAuthenticated}) => ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: {redirectPath},
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;

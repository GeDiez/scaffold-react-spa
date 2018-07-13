import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider, Subscribe } from "unstated";

import Session from "../stores/session";
import { WithPrivateRoute } from "../helpers";
import ContainerLogin from '../UI/containers/login';
import ContainerDashboard from '../UI/containers/dashboard';

const PrivateRoute = WithPrivateRoute({ redirectPath: '/welcome' });

const RouterApp = () => {
  return (
    <Provider>
      <Subscribe to={[Session]}>
        {session => (
          <Router>
            <Fragment>
              <PrivateRoute
                path="/dashboard"
                component={ContainerDashboard}
                isAuthenticated={session.state.isAuthenticated}
              />
              <Route path="/">
                {props => session.state.isAuthenticated ? (
                  <Redirect to="/dashboard" />
                  ) : (
                  <ContainerLogin {...props} />
                )}
              </Route>
              <Redirect to="welcome"></Redirect>
            </Fragment>
          </Router>
        )}
      </Subscribe>
    </Provider>
  );
};

export default RouterApp;
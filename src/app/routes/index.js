import { BrowserRouter as Router } from "react-router-dom";
import { PrivateRoute, RouteWithSubRoutes } from "../helpers";
import { ContainerLogin } from '../UI/containers';

import React from 'react';

const routesSchema = [
  {
    path: '/login',
    component: ContainerLogin,
    //routes: [ {path: '/', component: Component, routes: [...routes]} ] //optional: routes nested
  },
  // {
  //   path: '/post',
  //   component: Post,
  // }
];

const RouterApp = () => {
  return (
    <Router>
      <div>
        {
          routesSchema.map(route =>
            <RouteWithSubRoutes key={route.path} {...route} />
          )
        }
      </div>
    </Router>
  );
};

export default RouterApp;
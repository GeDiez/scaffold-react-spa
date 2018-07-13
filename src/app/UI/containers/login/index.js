import React from "react";
import { Route } from "react-router-dom";
import { Subscribe } from "unstated";

import Session from "../../../stores/session";
import LayoutWelcome from "../../layouts/welcome";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import Welcome from "./Welcome";

const login = (session) => (values, { setSubmitting, setErrors }) =>
  session.authenticate({ email: values.email, password: values.password })
    .then(() => {
      session.getUser();
    });

const ContainerLogin = () => (
  <Subscribe to={[Session]}>
    {session => (
      <LayoutWelcome>
        <Route path="/welcome" component={Welcome} />
        <Route path="/signin">
          {(props) => props.match ? (
            <FormLogin {...props} onSubmit={login(session)} />
          ) : null }
        </Route>
        <Route path="/signup" component={FormRegister} />
      </LayoutWelcome>
    )}
  </Subscribe>
)

export default ContainerLogin;
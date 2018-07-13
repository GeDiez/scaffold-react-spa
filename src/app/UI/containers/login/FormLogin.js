import React from 'react';

import { Formik } from 'formik';

import Button from "../../components/Button";

const validate = (values, props) => {
  return false;
}

const FormLogin = ({ onSubmit }) => (
  <Formik initialValues={{ password: '', email: '' }} onSubmit={async (values, actions) => {await onSubmit(values, actions)}} validate={validate}>
    {({ values, errors, handleChange, handleSubmit, handleBlur, isSubmitting }) => (
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input is-danger"
              type="email"
              name="email"
              placeholder="e.g. alexsmith@gmail.com"
              value={values.email}
              onInput={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <p className="help">{errors.email}</p>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="password"
              placeholder="e.g Alex Smith"
              value={values.password}
              onInput={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <Button isPrimary isSubmit isLoading={isSubmitting} isBold>Submit</Button>
      </form>
    )}
  </Formik>
);

export default FormLogin;

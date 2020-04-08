import React from 'react';
import {Field, ErrorMessage} from 'formik';

const Input = ({name, label, type = 'text', component = 'input', placeholder, children}) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <ErrorMessage component={Error} name={name}></ErrorMessage>
      <Field placeholder={placeholder} type={type} component={component} name={name} id={name} />
    </div>
  );
};

const Error = ({children}) => {
  return <div className="error">{children}</div>;
};

export default Input;

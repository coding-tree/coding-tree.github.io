import React from 'react';
import {Field, ErrorMessage} from 'formik';

const Input = ({name, touched, label, error, type = 'text', component = 'input', placeholder}) => {
  const errorClass = (error, touched) => {
    return touched && error ? 'input-error' : '';
  };
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field
        className={errorClass(error, touched)}
        placeholder={placeholder}
        type={type}
        component={component}
        name={name}
        id={name}
      />
      <ErrorMessage component={Error} name={name}></ErrorMessage>
    </div>
  );
};

const Error = ({children}) => {
  return <div className="error">{children}</div>;
};

export default Input;

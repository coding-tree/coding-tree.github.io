import React from 'react';
import {Field, ErrorMessage} from 'formik';

const Input = ({name, label, type = 'text', component = 'input', placeholder}) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field placeholder={placeholder} type={type} component={component} name={name} id={name} />
      <ErrorMessage name={name}></ErrorMessage>
    </div>
  );
};

export default Input;

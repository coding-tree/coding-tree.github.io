import React from "react";
import { Field } from "formik";
import styled from "styled-components";

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  padding-bottom: 0.5rem;
`;

const Input = ({ name, label, type = "text", handleError }) => {
  return (
    <FormControl>
      <Label htmlFor={name}>{label}</Label>
      <Field className="input" type={type} name={name} id={name}></Field>
      {handleError(name)}
    </FormControl>
  );
};

export default Input;

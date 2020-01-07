import React from "react";
import { Field, ErrorMessage } from "formik";
import styled, { css } from "styled-components";

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  height: 50px;
  border-radius: 4px;
  border: none;
  padding-left: 1.3rem;
  margin-bottom: 1rem;
  font-family: "Alegreya Sans", sans-serif;
  font-size: 1rem;
  ${props =>
    props.component === "textarea" &&
    css`
      padding-top: 1rem;
      resize: none;
      max-height: 150px;
      height: 150px !important;
    `}
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  padding-bottom: 0.5rem;
`;

const StyledError = styled.div`
  height: 50px;
  background-color: #f40000;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding-left: 1.3rem;
  margin-bottom: 1rem;
`;

const Input = ({
  name,
  label,
  type = "text",
  component = "input",
  placeholder
}) => {
  return (
    <FormControl>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        as={Field}
        placeholder={placeholder}
        type={type}
        component={component}
        name={name}
        id={name}
      ></StyledInput>
      <ErrorMessage component={StyledError} name={name}></ErrorMessage>
    </FormControl>
  );
};

export default Input;

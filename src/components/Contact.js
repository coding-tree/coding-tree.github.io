import React from "react";
import styled from "styled-components";
import { withFormik, Form } from "formik";
import Input from "./Input";

import * as Yup from "yup";

const SendButton = styled.button`
  border: none;
  transition: 0.3s;
  &:hover {
    color: #fff;
    background-color: #7f2538;
    transition: 0.3s;
  }
`;

const Contact = ({ errors, touched }) => {
  const renderError = name => {
    return touched[name] && errors[name] && <div>{errors[name]}</div>;
  };
  return (
    <div>
      <h1>Lub wypełnij formularz poniżej</h1>
      <Form>
        <Input handleError={renderError} name="name" label="Imię"></Input>
        <Input
          name="email"
          type="email"
          label="Adres E-mail"
          handleError={renderError}
        ></Input>
        <SendButton>Wyślij</SendButton>
      </Form>
    </div>
  );
};

const Formik = withFormik({
  mapPropsToValues: ({ name, email }) => {
    return {
      name: name || "",
      email: email || ""
    };
  },

  //   Validation
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, "Imię jest za krótkie")
      .required("To pole jest wymagane"),
    email: Yup.string()
      .email("Podaj poprawny adres email")
      .required("Adres email jest wymagany")
  }),

  //   Submit Form - PROPS here
  handleSubmit: (values, { resetForm }) => {
    // Handle submitting
    console.log(values);
    resetForm();
  }
})(Contact);

export default Formik;

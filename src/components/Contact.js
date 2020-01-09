import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Form } from "formik";
import Input from "./Input";
import { ToastContainer } from "react-toastify";

const SendButton = styled.button`
  border: none;
  transition: 0.3s;
  background-color: #f9f2e6;
  color: #23090f;

  &:hover {
    color: #fff;
    background-color: #7f2538;
    transition: 0.3s;
  }
  &:disabled {
    color: #aeb7b3;
    background-color: #fff;
    cursor: ${props => (props.isSubmitting ? "progress" : "not-allowed")};
  }
`;

const StyledWrapper = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 4rem;
  @media only screen and (max-width: 520px) {
    padding: 0 1rem;
  }
`;
const TitleWrapper = styled.h2`
  margin-bottom: 1.5rem;
  @media only screen and (max-width: 520px) {
    font-size: 1.6rem;
  }
`;

const StyledInfo = styled.div`
  margin-bottom: 1.5rem;
`;

const StyledLink = styled.a`
  color: #fff;
`;

const Contact = ({ values, errors, isSubmitting, handleChange }) => {
  const hasErrors =
    Object.entries(errors).length > 0 && errors.constructor === Object;

  console.log(values);
  return (
    <StyledWrapper>
      <TitleWrapper>Lub wypełnij formularz poniżej</TitleWrapper>
      <Form>
        <Input
          name="person"
          label="Imię i nazwisko"
          placeholder="Wpisz imię i nazwisko (opcjonalnie)"
        ></Input>
        <Input
          name="email"
          type="email"
          label="Adres E-mail"
          placeholder="Wpisz adres email"
        ></Input>
        <Input
          name="message"
          label="Treść wiadomości"
          placeholder="Wpisz treść wiadomości"
          component="textarea"
        ></Input>
        <Input name="_cc" hidden></Input>
        <Input name="_replyto" hidden></Input>
        <StyledInfo>
          Wysyłając formularz akceptujesz{" "}
          <StyledLink as={Link} to="/regulamin">
            regulamin i politykę prywatności (RODO)
          </StyledLink>
        </StyledInfo>

        <SendButton
          disabled={hasErrors || isSubmitting}
          isSubmitting={isSubmitting}
          as="button"
          type="submit"
        >
          {isSubmitting ? "Wysyłanie" : "Wyślij"}
        </SendButton>
      </Form>
      <ToastContainer></ToastContainer>
    </StyledWrapper>
  );
};

export default Contact;

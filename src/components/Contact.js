import React from 'react';
import Box from './Box/Box';
import BoxImage from './Box/BoxImage';
import BoxWrapper from './Box/BoxWrapper';
import BoxContent from './Box/BoxContent';
import MotiveSlider from './MotiveSlider';
import {Form} from 'formik';
import Input from './Input';
import {withTheme} from './hoc/withTheme';
import {withTimeOfDay} from './hoc/withTimeOfDay';

const Contact = ({errors, isSubmitting, motive, changeMotive, theme, dateTime, changeTimeOfDay}) => {
  const hasErrors = Object.entries(errors).length > 0 && errors.constructor === Object;

  return (
    <section id="contact">
      <Box motive={motive}>
        <BoxImage theme={theme} light="box" dark="box_dark"></BoxImage>
        <BoxWrapper>
          <BoxContent>
            <div className="box-contact">
              <MotiveSlider
                title="Przełącz motyw"
                dateTime={dateTime}
                changeTimeOfDay={changeTimeOfDay}
                theme={theme}
                changeMotive={changeMotive}></MotiveSlider>
              <div className="box-contact-description">
                <h1>Kontakt</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempore blanditiis quos sit nesciunt
                  adipisci rem fugiat odio, doloremque maiores libero doloribus vel nobis amet ab sunt neque explicabo
                  incidunt.
                </p>
                <h2>Formularz kontaktowy</h2>
                <Form>
                  <Input
                    name="person"
                    label="Imię i nazwisko"
                    placeholder="Wpisz imię i nazwisko (opcjonalnie)"></Input>
                  <Input name="email" type="email" label="Adres E-mail" placeholder="Wpisz adres email"></Input>
                  <Input
                    name="message"
                    label="Treść wiadomości"
                    placeholder="Wpisz treść wiadomości"
                    component="textarea"></Input>

                  <button disabled={hasErrors} type="submit">
                    Wyślij
                  </button>
                </Form>
              </div>
            </div>
          </BoxContent>
        </BoxWrapper>
      </Box>
    </section>
  );
};

export default withTimeOfDay(withTheme(Contact));

import {withFormik} from 'formik';
import Contact from './Contact';
import * as Yup from 'yup';
import * as emailjs from 'emailjs-com';

const Formik = withFormik({
  mapPropsToValues: ({person, email, message}) => {
    return {
      person: person || '',
      email: email || '',
      message: message || '',
    };
  },

  validationSchema: Yup.object().shape({
    message: Yup.string()
      .min(10, 'Treść wiadomości jest za krótka')
      .max(255, 'Treść wiadomości jest za długa')
      .required('To pole jest wymagane'),
    email: Yup.string().email('Podaj poprawny adres email').required('Adres email jest wymagany'),
  }),

  handleSubmit: ({person, email, message}, {resetForm}) => {
    let templateParams = {
      from_name: person,
      from_email: email,
      to_name: 'Józef Rzadkosz',
      message_html: message,
      reply_to: email,
    };

    emailjs
      .send('sendgrid', 'codingtree', templateParams, 'user_dIvEpD7E5qSWtvsKbDOu6')
      .then(() => {
        resetForm();
      })
      .catch((err) => console.log('errir', err));
  },
})(Contact);

export default Formik;

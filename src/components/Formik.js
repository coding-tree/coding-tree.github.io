import { withFormik } from "formik";
import Contact from "./Contact";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// import dev from "../config/dev";
// import prod from "../config/prod";

const Formik = withFormik({
  mapPropsToValues: ({ person, email, message }) => {
    return {
      person: person || "",
      email: email || "",
      message: message || ""
    };
  },

  validationSchema: Yup.object().shape({
    message: Yup.string()
      .min(10, "Treść wiadomości jest za krótka")
      .max(255, "Treść wiadomości jest za długa")
      .required("To pole jest wymagane"),
    email: Yup.string()
      .email("Podaj poprawny adres email")
      .required("Adres email jest wymagany")
  }),

  handleSubmit: (values, { resetForm }) => {
    const toastOptions = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "toastify"
    };

    fetch("https://api.sendgrid.com/v3/mail/send", {
      body:
        '{"personalizations": [{"to": [{"email": "test@example.com"}]}],"from": {"email": "test@example.com"},"subject": "Sending with SendGrid is Fun","content": [{"type": "text/plain", "value": "and easy to do anywhere, even with cURL"}]}',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_SENDGRID_API_KEY}`,
        "Content-Type": "application/json"
      },
      mode: "no-cors",
      method: "POST"
    });
  }
})(Contact);

export default Formik;

//Bearer $SENDGRID_API_KEY

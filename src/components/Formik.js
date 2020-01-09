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

    const data = {
      personalizations: [
        {
          to: [
            {
              email: "jozef.rzadkosz@codingtree.pl",
              name: "Józef Rzadkosz"
            }
          ],
          dynamic_template_data: {
            message: values.message,
            person: values.person,
            email: values.email
          }
        }
      ],
      from: {
        email: values.email,
        name: values.person
      },
      template_id: "d-3beb4b205ea34a53ab070925da8393bc"
    };

    fetch("https://7vxhbapjzzhmypgyk.stoplight-proxy.io/v3/mail/send", {
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_SENDGRID_API_KEY}`,
        "content-type": "application/json"
      },
      method: "POST"
    })
      .then(() => {
        resetForm();
        return toast.success("Wysłano pomyślnie!", toastOptions);
      })
      .catch(() =>
        toast.error(
          "Coś poszło nie tak, Spróbuj ponownie później...",
          toastOptions
        )
      );
  }
})(Contact);

export default Formik;

//Bearer $SENDGRID_API_KEY

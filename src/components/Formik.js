import { withFormik } from "formik";
import Contact from "./Contact";
import * as Yup from "yup";
// import { toast } from "react-toastify";
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

    axios({
      method: "POST",
      url: "https://formspree.io/mdoaqqyo",
      data: values
    }).then(resp => console.log(resp.data));
  }
})(Contact);

export default Formik;

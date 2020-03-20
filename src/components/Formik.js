import { withFormik } from "formik";
import Contact from "./Contact";
import * as Yup from "yup";

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

  handleSubmit: ({ person, email, message }, { resetForm }) => {}
})(Contact);

export default Formik;

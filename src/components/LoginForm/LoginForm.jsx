import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { Navigate } from "react-router-dom";
import css from "./LoginForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/operations"; 
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const initialValues = { email: "", password: "" };

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required field!"),
    password: Yup.string()
      .matches(passwordRules, "Please create a stronger password!")
      .required("Password is required field!")
  });

  const handleSubmit = (values, actions) => {
    dispatch(logIn((values)));
    actions.resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to='/' />;
}
  return (
    <div className={css.form}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label className={css.label} htmlFor={emailFieldId}>
            Email
            <Field
              className={css.field}
              name="email"
              type="email"
              id={emailFieldId}
              autoComplete="email"
            />
          </label>
          <ErrorMessage name="email" component="div" className={css.error} />

          <label className={css.label} htmlFor={passwordFieldId}>
            Password
            <Field
              className={css.field}
              name="password"
              type="password"
              id={passwordFieldId}
              autoComplete="password"
            />
          </label>
          <ErrorMessage name="password" component="div" className={css.error} />

          <button className={css.btn} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

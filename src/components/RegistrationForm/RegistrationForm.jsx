import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const RegistrationForm = () => {
    const nameFieldId = useId();
	const emailFieldId = useId();
	const passwordFieldId = useId();

    const dispatch = useDispatch();
    const initialValues = { name: '', email: '', password: ''};

    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
        email: Yup.string()
        .email('Please enter a valid email')
		.required('Email is required field!'),
        password: Yup.string()
        .matches(passwordRules, 'Please create a stronger password!')
		.required('Password is required field!'),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
        register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        })
        );
        form.reset();
    };

    return (
        <div className={css.form}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <label className={css.label} htmlFor={nameFieldId}>Name
                        <Field className={css.field} name="name" type='text' id={nameFieldId} autoComplete="name" />
                    </label>
                    <ErrorMessage name="name" component="div" className={css.error} />

                
                    <label className={css.label} htmlFor={emailFieldId}>Email
                        <Field className={css.field} name="email" type='email' id={emailFieldId} autoComplete="email" />
                    </label>
                    <ErrorMessage name="email" component="div" className={css.error} />

                    <label className={css.label} htmlFor={passwordFieldId}>Password
                        <Field className={css.field} name="password" type='password' id={passwordFieldId} autoComplete="password" />
                    </label>
                    <ErrorMessage name="password" component="div" className={css.error} />

                    <button className={css.btn} type="submit">Register</button>
                </Form>
            </Formik>
        </div>
    );
};

export default RegistrationForm;



import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { nanoid } from '@reduxjs/toolkit';

const ContactForm = () => {
    const dispatch = useDispatch();
    const initialValues = { name: '', number: '' };

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
        number: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .max(50, 'Must be 50 characters or less')
            .required('Required')
    });

    const handleSubmit = (values, { resetForm }) => {
        const newContact = { name: values.name, number: values.number, id: nanoid() };
        console.log('New contact:', newContact); 
        dispatch(addContact(newContact));
        resetForm();
    };

    return (
        <div className={css.form}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <label className={css.label} htmlFor="name">Name
                        <Field className={css.field} name="name" type='text' id="name" autoComplete="name" />
                    </label>
                    <ErrorMessage name="name" component="div" className={css.error} />

                    <label className={css.label} htmlFor="number">Number
                        <Field className={css.field} name="number" type='text' id="number" autoComplete="tel" />
                    </label>
                    <ErrorMessage name="number" component="div" className={css.error} />

                    <button className={css.btn} type="submit">Add contact</button>
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;

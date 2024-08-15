import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import {
	selectError,
	selectFilteredContacts,
	selectLoading,
} from '../../redux/contacts/selectors';
import ContactList from '../../components/ContactList/ContactList';
import Error from '../../components/Error/Error';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

import css from './ContactsPage.module.css';
import Loader from '../../components/Loader/Loader';

const ContactsPage = () => {
	const dispatch = useDispatch();
	const loading = useSelector(selectLoading);
	const error = useSelector(selectError);
	const contacts = useSelector(selectFilteredContacts);

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<div className={css.container}>
			<ContactForm />
			<div>
				<SearchBox />
				{loading && <Loader />}
				{error && <Error />}
				{contacts.length > 0 && !error && !loading && (
					<ContactList />
				)}
			</div>
		</div>
	);
};

export default ContactsPage;
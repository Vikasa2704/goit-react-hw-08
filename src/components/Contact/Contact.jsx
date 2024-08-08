import { IoIosContact } from 'react-icons/io';
import { MdPhoneInTalk } from 'react-icons/md';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ name, number, id }) => {
	const dispatch = useDispatch();

	
	return (
		<li className={css.contactItem}>
			<div>
				<div className={css.contactContext}>
					<IoIosContact />
					<span>{name}</span>
				</div>
				<div className={css.contactContext}>
					<MdPhoneInTalk />
					<a href={`tel: ` + number}>{number}</a>
				</div>
			</div>
			<button className={css.btn}  onClick={() => dispatch(deleteContact(id))}>Delete</button>
		</li>
	);
};

export default Contact;
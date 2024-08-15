import { NavLink } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';
import { FcContacts } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';


const Navigation = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/">
      <FcHome size="24"/>
      <span>Home</span>
      </NavLink>
      
        <NavLink className={css.link} to="/contacts">
        <FcContacts size="24"/>
        <span>Contacts</span>
        </NavLink>
      
    </nav>
  );
};


export default Navigation
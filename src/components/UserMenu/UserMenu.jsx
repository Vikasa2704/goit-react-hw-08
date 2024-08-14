import { useSelector, useDispatch } from 'react-redux';
import css from './UserMenu.module.css'
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import { CiLogout } from 'react-icons/ci';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}!</p>
      <button className = {css.btn} type="button" onClick={() => dispatch(logout())}>
      <CiLogout />
      <span>LogOut</span>
      </button>

      </div>
  );
}

export default UserMenu
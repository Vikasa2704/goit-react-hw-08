import { useSelector, useDispatch } from 'react-redux';
import css from './UserMenu.module.css'
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}!</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>

      </div>
  );
}

export default UserMenu
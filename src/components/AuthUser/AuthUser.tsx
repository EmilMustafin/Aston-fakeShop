import { Link } from 'react-router-dom';
import { useAuthentication } from '../../utils/user-data';
import { Loader } from '../Loader/Loader';
import st from './AuthUser.module.scss';

const AuthUser = () => {
  const { isSignin, logout } = useAuthentication();
  const handleLogout = () => {
    logout();
  };

  return !isSignin ? (
    <Loader /> && (
      <ul className={st.menu_list}>
        <li className={st.menu_item}>
          <Link to="/signin">
            <button className={st.login_button}>
              Sign In /
              <br />
              Sign Up
            </button>
          </Link>
        </li>
      </ul>
    )
  ) : (
    <ul className={st.menu_list}>
      <li className={st.menu_item}>
        <Link className={st.favorites_link} to="/favorites">
          Favorites
        </Link>
      </li>
      <li className={st.menu_item}>
        <Link className={st.favorites_link} to="/history">
          History
        </Link>
      </li>
      <li className={st.menu_item}>
        <button onClick={handleLogout} className={st.login_button}>
          Sign Out
        </button>
      </li>
    </ul>
  );
};

export { AuthUser };

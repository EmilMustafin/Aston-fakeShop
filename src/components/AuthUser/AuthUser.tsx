import { Link, useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthentication';
import st from './AuthUser.module.scss';

const AuthUser = () => {
  const navigate = useNavigate();
  const { isSignin, logout } = useAuthentication();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  return (
    <div>
      {!isSignin ? (
        <ul className={st.menu_list}>
          <li className={st.menu_item}>
            <Link to="/signin">
              <button className={st.login_button}>Sign In</button>
            </Link>
          </li>
        </ul>
      ) : (
        <ul className={st.menu_list}>
          <li className={st.menu_item}>
            <Link className={st.favorites_link} to="/favorites">
              Favorites
            </Link>
          </li>
          <li className={st.menu_item}>
            <button onClick={handleLogout} className={st.login_button}>
              Sign Out
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export { AuthUser };

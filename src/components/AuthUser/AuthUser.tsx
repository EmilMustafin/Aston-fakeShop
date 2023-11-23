import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.config';
import { IState } from '../../inerfaces/IfakeProducts';
import { authUser, logoutUser } from '../../redux/slices/userSlice';
import st from './AuthUser.module.scss';

const AuthUser = () => {
  const user = useSelector((state: IState) => state.user.email);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelLogout = () => {
    signOut(auth);
    navigate('/signin');
  };

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(
          authUser({
            email: user.email,
            id: user.uid,
            token: user.displayName,
          }),
        );
      } else {
        dispatch(logoutUser());
      }
    });
  }, []);
  return (
    <div>
      {!user ? (
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
            <Link to="/signin">
              <button onClick={handelLogout} className={st.login_button}>
                Sign Out
              </button>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export { AuthUser };

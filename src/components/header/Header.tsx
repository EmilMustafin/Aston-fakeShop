import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import st from './Header.module.scss';

import logo from '/logo.svg';

const Header = () => {
  return (
    <header>
      <nav className={st.nav_list}>
        <Link to="/" className={st.logo}>
          <img src={logo} alt="logo" title="Fake Shop" className="image_logo" />
        </Link>
        <form className={st.form_input}>
          <input required type="search" placeholder="Поиск..." className={st.input_search} />

          <button type="submit" className={st.button_search}>
            <FiSearch color="white" size={20} title="Search" />
          </button>
        </form>

        <ul className={st.menu_list}>
          <li className={st.menu_item}>
            <Link className={st.favorites_link} to="/favorites">
              Favorites
            </Link>
          </li>
          <li className={st.menu_item}>
            <Link to="/signin">
              <button className={st.login_button}>Sign In</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };

import { FiSearch } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { AuthUser } from '../AuthUser/AuthUser';
import { Toggle } from '../ui/toggle/Toggle';
import st from './Header.module.scss';

import logo from '/logo.svg';

const Header = () => {
  return (
    <header className={st.header}>
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
        <AuthUser />
        <div className={st.toggle_mode}>
          <Toggle />
        </div>
      </nav>
    </header>
  );
};

export { Header };

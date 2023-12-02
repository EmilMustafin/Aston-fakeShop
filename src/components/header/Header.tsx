import { Link } from 'react-router-dom';

import { AuthUser } from '../AuthUser/AuthUser';
import { SearchForm } from '../SearchForm/SearchForm';
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
        <SearchForm />
        <AuthUser />
        <div className={st.toggle_mode}>
          <Toggle />
        </div>
      </nav>
    </header>
  );
};

export { Header };

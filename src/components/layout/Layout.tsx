import { Outlet } from 'react-router-dom';

import st from './Layout.module.scss';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';

const Layout = () => {
  return (
    <div className={st.wrapper}>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export { Layout };

import { Outlet } from 'react-router-dom';

import './Layout.scss';

import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export { Layout };

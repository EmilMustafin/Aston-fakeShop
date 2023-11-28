import { Outlet } from 'react-router-dom';

import './Layout.scss';

import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export { Layout };

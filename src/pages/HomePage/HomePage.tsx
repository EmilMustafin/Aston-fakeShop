import { CarProducts } from '../../components/CardProducts/CarProducts';

import './HomePage.scss';

const HomePage = () => {
  return (
    <main className="main">
      <h1 className="main_tittle">FakeStore</h1>
      <div className="main_text">
        <p>Best online store</p>
      </div>
      <CarProducts />
    </main>
  );
};

export { HomePage };

import { CarProducts } from '../../components/CardProducts/CarProducts';

import './HomePage.scss';

const HomePage = () => {
  return (
    <>
      <h1 className="main_tittle">FakeStore</h1>
      <div className="main_text">
        <p>Best online store</p>
      </div>
      <CarProducts />
    </>
  );
};

export { HomePage };

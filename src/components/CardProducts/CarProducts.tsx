import { Link } from 'react-router-dom';

import './CarProducts.scss';
import { useGetProductsQuery } from '../../redux/api/fakeApi';

const CarProducts = () => {
  const { data: products } = useGetProductsQuery();
  return (
    <section className="section">
      <ul className="cards_item">
        {products?.map(product => (
          <li className="cards_list" key={product.id} title={product.title}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} loading="lazy" alt={product.title} />
              <div className="product_text">
                <h1 className="product_title">{product.title}</h1>
                <p className="product_price">${product.price}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { CarProducts };

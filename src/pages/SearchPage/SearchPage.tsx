import { Link, useLocation } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { useSearchProductsQuery } from '../../redux/api/fakeApi';

import './Searchpage.scss';

const SearchPage = () => {
  const { search: searchParams } = useLocation();
  const query = new URLSearchParams(searchParams).get('query') || '';

  const { data: products = [], isLoading } = useSearchProductsQuery(query);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="section">
      {products.length !== 0 ? (
        <ul className="cards_item">
          {products.map(product => (
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
      ) : (
        <div className="empty_error ">
          <img src="/error.png" alt="" className="error" />
          <p className="no-data-message">No data found</p>
        </div>
      )}
    </section>
  );
};

export { SearchPage };

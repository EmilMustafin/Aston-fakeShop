import './CarProducts.scss';
import { useGetProductsQuery } from '../../redux/api/fakeApi';
import { CardsItems } from '../CardsItems/CardsItems';
import { Loader } from '../Loader/Loader';
const CarProducts = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  return isLoading ? (
    <Loader />
  ) : (
    <section className="section">
      <ul className="cards_item">
        {products?.map(product => (
          <li key={product.id} className="cards_list">
            <CardsItems
              key={product.id}
              isLoading={isLoading}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              product={product}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export { CarProducts };

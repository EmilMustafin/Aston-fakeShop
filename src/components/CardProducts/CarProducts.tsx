import { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './CarProducts.scss';
import { useBookmark } from '../../hooks/useBookmarked';
import { IProduct } from '../../interfaces/types';
import { useGetProductsQuery } from '../../redux/api/fakeApi';

const CarProducts = () => {
  const { data: products } = useGetProductsQuery();
  const [selections, setSelections] = useState<number[]>([]);
  const { toggleBookmark } = useBookmark(selections[0]);
  const bookmarkedHandler = (product: IProduct) => () => {
    setSelections((prev: number[]) =>
      prev.includes(Number(product.id))
        ? prev.filter((id: number) => id !== Number(product.id))
        : prev.concat(Number(product.id)),
    );
    toggleBookmark(product);
  };
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
            <button onClick={bookmarkedHandler(product)} className={`button`}>
              <AiFillHeart size={45} className={`icon ${selections.includes(Number(product.id)) && 'bookmarked'}`} />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { CarProducts };

import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IProduct } from '../../types/type';
import { useBookmark } from '../../utils/user-data';
import { Loader } from '../Loader/Loader';
import './CardsItems.scss';

interface CardsItems {
  isLoading: boolean;
  id: number;
  price: number;
  title: string;
  image: string;
  product: IProduct;
}

const CardsItems = ({ isLoading, id, price, title, image, product }: CardsItems) => {
  const { isBookmarked, toggleBookmark } = useBookmark(id);

  const bookmarkedHandler = () => {
    toggleBookmark(product);
  };
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Link to={`/product/${id}`}>
        <img src={image} className="image_carts" loading="lazy" alt={title} />
        <div className="product_text">
          <h1 className="product_title">{title}</h1>
          <p className="product_price">${price}</p>
        </div>
      </Link>
      <button onClick={bookmarkedHandler} className={`button ${isBookmarked && 'bookmarked'}`}>
        <AiFillHeart size={45} className={`icon ${isBookmarked && 'bookmarked'}`} />
      </button>
    </>
  );
};

export { CardsItems };

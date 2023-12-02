import { AiFillHeart } from 'react-icons/ai';
import './DetailProduct.scss';

import { IProduct } from '../../types/type';
import { useBookmark } from '../../utils/user-data';
import { Loader } from '../Loader/Loader';
import { Star } from '../Star/Star';

interface DetailProps {
  isLoading: boolean;
  id: number;
  rating_count: number;
  price: number;
  title: string;
  description: string;
  rate: number;
  image: string;
  product: IProduct;
}

const DetailProduct = ({
  isLoading,
  id,
  rating_count,
  price,
  title,
  image,
  description,
  rate,
  product,
}: DetailProps) => {
  const { isBookmarked, toggleBookmark } = useBookmark(id);

  const bookmarkedHandler = () => {
    toggleBookmark(product);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <section className="detail-product">
      <div className="product-image">
        <img src={image} loading="lazy" alt={title} />
        <div className="button-container" />
      </div>
      <div className="product-info">
        <div className="title_products">{title}</div>
        <p>${price}</p>
        <Star stars={rate} count={rating_count} />
        <div>
          <p className="description">{description}</p>
          <button onClick={bookmarkedHandler} className={`button_bookmarked ${isBookmarked && 'bookmarked'}`}>
            <AiFillHeart size={90} className={`icon ${isBookmarked && 'bookmarked'}`} />
          </button>
        </div>

        <hr />
      </div>
    </section>
  );
};

export { DetailProduct };

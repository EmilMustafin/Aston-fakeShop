import { AiFillHeart } from 'react-icons/ai';
import './DetailProduct.scss';
import { useBookmark } from '../../hooks/useBookmarked';
import { IProduct } from '../../interfaces/types';

const DetailProduct = ({ ...products }: IProduct) => {
  const { isBookmarked, toggleBookmark } = useBookmark(products?.id);

  const bookmarkedHandler = () => {
    toggleBookmark(products);
  };

  return (
    <section className="detail-product">
      <div className="product-image">
        <img src={products?.image} loading="lazy" alt={products?.title} />
        <div className="button-container">
          <button onClick={bookmarkedHandler} className={`button_detail ${isBookmarked && 'bookmarked'}`}>
            <AiFillHeart size={90} className={`icon ${isBookmarked && 'bookmarked'}`} />
          </button>
        </div>
      </div>
      <div className="product-info">
        <div className="title_products">{products?.title}</div>
        <p>${products?.price}</p>
        <p className="review">
          Rating {products?.rating?.rate}/5 Count: ({products?.rating?.count})
        </p>
        <p className="description">{products?.description}</p>

        <hr />
      </div>
    </section>
  );
};

export { DetailProduct };

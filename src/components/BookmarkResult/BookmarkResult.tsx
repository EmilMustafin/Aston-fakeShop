import { Dispatch, SetStateAction } from 'react';
import { HiCheck } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { IProduct } from '../../types/type';
import './BookmarkResult.scss';
import { Loader } from '../Loader/Loader';

interface BookmarkResultProps {
  products: IProduct[];
  isLoading: boolean;
  selections: number[];
  setSelections: Dispatch<SetStateAction<number[]>>;
}

const BookmarkResult = ({ products, isLoading, selections, setSelections }: BookmarkResultProps) => {
  return isLoading ? (
    <Loader />
  ) : (
    <>
      {products.length === 0 && (
        <div className="favorite_empty">
          <div className="empty_error ">
            <img src="/error.png" alt="" className="error" />
          </div>
          <p className="empty_text">Your cart is empty!</p>
        </div>
      )}

      <ul className="favorites_container">
        {products.length > 0 &&
          products.map(item => (
            <li key={item.id} className="cards_favorite">
              <Link to={`/product/${item.id}`}>
                <div className="favorite_cart">
                  <p className="favorite_title">{item.title}</p>
                  <div className="favorite_image">
                    <img className="image_favorite" src={item?.image} alt={item?.title} />
                  </div>
                </div>
              </Link>
              <button
                onClick={() =>
                  setSelections((prev: number[]) =>
                    prev.includes(Number(item.id))
                      ? prev.filter((id: number) => id !== Number(item.id))
                      : prev.concat(Number(item.id)),
                  )
                }
                className="button_delete"
              >
                <HiCheck
                  size={20}
                  className={`hicheck ${selections.includes(Number(item.id)) ? 'no-chose' : 'chose'}`}
                />
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export { BookmarkResult };

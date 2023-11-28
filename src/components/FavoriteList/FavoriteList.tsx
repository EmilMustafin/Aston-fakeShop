import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';
import { IProduct } from '../../interfaces/types';
import { BookmarkResult } from '../BookmarkResult/BookmarkResult';
import './FavoriteList.scss';

interface ProductList {
  products: IProduct[];
  isLoading: boolean;
}

const FavoriteList = ({ products, isLoading }: ProductList) => {
  const { updateDocument } = useUpdateDocument();
  const [selections, setSelections] = useState<number[]>([]);

  const clearSelection = () => {
    updateDocument(products, selections);
    setSelections([]);
  };

  return (
    <div className="favorite_page">
      <button onClick={clearSelection} className="button_clear">
        <AiOutlineDelete size={45} />
        <p>Clear</p>
      </button>
      <BookmarkResult products={products} isLoading={isLoading} selections={selections} setSelections={setSelections} />
    </div>
  );
};

export { FavoriteList };

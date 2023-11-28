import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { FavoriteList } from '../../components/FavoriteList/FavoriteList';
import { db } from '../../firebase.config';
import { useAppSelector } from '../../hooks/useDispatch';
import { IProduct } from '../../interfaces/types';

const FavoritePage = () => {
  const currentUser = useAppSelector(state => state.auth.user);
  const [bookmarkedProducts, setBookmarkedProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(!bookmarkedProducts.length);
  useEffect(() => {
    if (!currentUser) {
      return;
    }

    const unsubDoc = onSnapshot(
      doc(db, 'users', currentUser?.uid),
      doc => {
        setBookmarkedProducts(doc.data()?.bookmarks.slice().reverse());
        setIsLoading(false);
      },
      error => {
        alert(error);
        setBookmarkedProducts([]);
        setIsLoading(false);
        // setIsError(true);
      },
    );

    return () => unsubDoc();
  }, [currentUser]);

  return <FavoriteList products={bookmarkedProducts} isLoading={isLoading} />;
};
export { FavoritePage };

import { arrayRemove, arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '..//hooks/useDispatch';
import { db } from '../firebase.config';

import { IProduct } from '../interfaces/types';

const useBookmark = (productId: number | undefined) => {
  const currentUser = useAppSelector(state => state.auth.user);
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (!currentUser || !productId) {
      return;
    }

    const unsubscribe = onSnapshot(doc(db, 'users', currentUser.uid), snapshot => {
      const data = snapshot.data();
      if (data && data.bookmarks) {
        setIsBookmarked(data.bookmarks.some((item: IProduct) => item.id === productId));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [currentUser, productId]);

  const toggleBookmark = async (product: IProduct | undefined) => {
    if (!currentUser) {
      navigate('/signin');
      return;
    }

    try {
      await updateDoc(doc(db, 'users', currentUser.uid), {
        bookmarks: isBookmarked
          ? arrayRemove({
              id: product?.id,
              title: product?.title,
              price: product?.price,
              image: product?.image,
              description: product?.description,
            })
          : arrayUnion({
              id: product?.id,
              title: product?.title,
              price: product?.price,
              image: product?.image,
              description: product?.description,
            }),
      });
      setIsBookmarked(!isBookmarked);
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  };

  return {
    isBookmarked,
    toggleBookmark,
  };
};

export { useBookmark };

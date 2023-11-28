import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { useAppSelector } from '../hooks/useDispatch';
import { IProduct } from '../interfaces/types';

const useUpdateDocument = () => {
  const currentUser = useAppSelector(state => state.auth.user);

  const updateDocument = async (products: IProduct[], selections: number[]) => {
    if (!currentUser) {
      return;
    }

    const currentProducts = products.filter(product => !selections.includes(Number(product.id)));

    try {
      await updateDoc(doc(db, 'users', currentUser.uid), {
        bookmarks: currentProducts.reverse(),
      });
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return { updateDocument };
};

export { useUpdateDocument };

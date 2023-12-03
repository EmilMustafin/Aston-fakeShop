import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { arrayRemove, arrayUnion, doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase.config';
import { useAppDispatch, useAppSelector } from '../hooks/useDispatch';
import { logoutUser, setCurrentUser } from '../redux/slices/userSlice';
import { IFormValues, IProduct } from '../types/type';

const useAuthentication = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const isSignin = useAppSelector(state => state.auth.user);

  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (!user) {
        dispatch(setCurrentUser(null));
        setIsLoading(true);
        return;
      }
      onSnapshot(doc(db, 'users', user.uid), doc => {
        dispatch(
          setCurrentUser({
            photoURL: doc.data()?.photoUrl || '',
            email: user.email,
            uid: user.uid,
          }),
        );
      });
    });

    return () => unsubscribe();
  }, [dispatch]);

  const logout = () => {
    signOut(auth);
    dispatch(logoutUser());
    navigate('/');
  };

  return { isSignin, auth, logout, isLoading };
};

export { useAuthentication };

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
      // eslint-disable-next-line no-console
      console.error('Error updating document:', error);
    }
  };

  return { updateDocument };
};

export { useUpdateDocument };

const useSignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IFormValues>();

  const handleRegister = async (data: IFormValues) => {
    try {
      const person = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await setDoc(doc(db, 'users', person.user.uid), {
        email: data.email,
        bookmarks: [],
        history: [],
      });
      navigate('/');
    } catch (e) {
      alert((e as Error).message);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(handleRegister),
  };
};

export { useSignUp };

const useSignIn = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IFormValues>();
  const handleLogin = async (data: IFormValues) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate('/');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Login error in Firebase:', error);
    }
  };
  return {
    register,
    handleSubmit: handleSubmit(handleLogin),
  };
};

export { useSignIn };

const useBookmarkedProducts = () => {
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
      },
    );

    return () => unsubDoc();
  }, [currentUser]);

  return { bookmarkedProducts, isLoading };
};

export { useBookmarkedProducts };

const useBookmark = (productId: number | null) => {
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
      /* eslint-disable no-console*/
      console.log('Error toggling bookmark:', error);
    }
  };

  return {
    isBookmarked,
    toggleBookmark,
  };
};

export { useBookmark };

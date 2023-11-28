import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';
import { auth, db } from '../firebase.config';
import { useAppDispatch, useAppSelector } from '../hooks/useDispatch';
import { logoutUser, setCurrentUser } from '../redux/slices/userSlice';

const useAuthentication = () => {
  const dispatch = useAppDispatch();
  const isSignin = useAppSelector(state => state.auth.user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (!user) {
        dispatch(setCurrentUser(null));
        return;
      }
      onSnapshot(doc(db, 'users', user.uid), doc => {
        dispatch(
          setCurrentUser({
            displayName: doc.data()?.lastName + ' ' + doc.data()?.firstName || '',
            photoURL: doc.data()?.photoUrl || '',
            email: user.email,
            emailVerified: user.emailVerified,
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
  };

  return { isSignin, logout };
};

export { useAuthentication };

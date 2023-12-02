import { User, onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot, query, where, doc, deleteDoc, addDoc } from 'firebase/firestore';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { auth, db } from '../firebase.config';
import { THistory } from '../types/type';

export const useAuthState = (
  setUser: Dispatch<SetStateAction<User | null>>,
  setSearchHistory: Dispatch<SetStateAction<THistory[]>>,
) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authUser => {
      setUser(authUser);

      if (authUser) {
        const unsubscribeHistory = getSearchHistory(setSearchHistory);

        return () => {
          unsubscribe();
          unsubscribeHistory?.();
        };
      }
    });

    return () => {
      unsubscribe();
    };
  }, [setUser, setSearchHistory]);
};

const getSearchHistory = (setSearchHistory: Dispatch<SetStateAction<THistory[]>>) => {
  const user = auth.currentUser;

  if (!user) {
    return () => {};
  }

  const collectionRef = collection(db, 'searchHistory');
  const q = query(collectionRef, where('userId', '==', user.uid));

  const unsubscribe = onSnapshot(q, snapshot => {
    const history = snapshot.docs.map(historyDoc => ({
      id: historyDoc.id,
      query: historyDoc.data().searchQuery,
      url: historyDoc.data().url || '',
    }));

    setSearchHistory(history);
  });

  return unsubscribe;
};

export const saveSearchHistory = async (searchQuery: string) => {
  const user = auth.currentUser;

  if (!user) {
    return;
  }

  const searchHistoryCollection = collection(db, 'searchHistory');
  const encodedQuery = encodeURIComponent(searchQuery);
  const newSearch = {
    searchQuery,
    userId: user.uid,
    timestamp: new Date(),
    url: `${encodedQuery}`,
  };

  try {
    await addDoc(searchHistoryCollection, newSearch);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Ошибка при сохранении истории поиска:', error);
  }
};

export const deleteSearchHistory = async (searchQueryId: string) => {
  const user = auth.currentUser;

  if (!user) {
    return;
  }

  const searchHistoryDoc = doc(db, 'searchHistory', searchQueryId);

  try {
    await deleteDoc(searchHistoryDoc);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Ошибка при удалении истории поиска:', error);
  }
};

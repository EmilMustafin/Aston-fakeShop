import { User } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteSearchHistory, useAuthState } from '../../utils/user-history';
import styles from './SearchHistoryPage.module.scss';

const SearchHistoryPage = () => {
  const [searchHistory, setSearchHistory] = useState<{ id: string; url: string; query: string }[]>([]);
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  useAuthState(setUser, setSearchHistory);
  const handleDeleteUrl = (urlId: string) => {
    deleteSearchHistory(urlId);
    setSearchHistory(prevHistory => prevHistory.filter(item => item.id !== urlId));
  };

  const handleClearHistory = () => {
    searchHistory.forEach(item => deleteSearchHistory(item.id));
    setSearchHistory([]);
  };

  return (
    <div className={styles.page__container}>
      <h1 className={styles.page__title}>Search History</h1>
      <p>{user ? `Пользователь: ${user.email}` : 'Пользователь не авторизован'}</p>
      <ul className={styles.history__list}>
        {searchHistory.map(item => (
          <li key={item.id} className={styles.history__item}>
            <div>
              <a href={`/search?query=${item.query}`}>{item.query}</a>
            </div>

            <button type="button" onClick={() => handleDeleteUrl(item.id)} className={styles.button_delete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {searchHistory.length > 0 && (
        <button type="button" onClick={handleClearHistory} className={styles.button_clear}>
          Сlear history
        </button>
      )}
      <button type="button" onClick={() => navigate('/')} className={styles.button_home}>
        Go Home
      </button>
    </div>
  );
};

export { SearchHistoryPage };

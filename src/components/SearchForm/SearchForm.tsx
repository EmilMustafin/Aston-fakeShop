import { Input, InputRef } from 'antd';
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';
import { useSearchProductsQuery } from '../../redux/api/fakeApi';
import { IProduct } from '../../types/type';
import { saveSearchHistory } from '../../utils/user-history';
import styles from './SearchForm.module.scss';
const { Search } = Input;

const SearchForm = () => {
  const [searchItems, setSearchItems] = useState<IProduct[]>([]);
  const { search: searchParams } = useLocation();
  const query = new URLSearchParams(searchParams).get('query') ?? '';
  const [selectedItem] = useState(-1);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState(query);
  const searchInputRef = useRef<InputRef | null>(null);
  const debouncedValue = useDebounce<string>(searchTerm, 1000);
  const navigate = useNavigate();
  const { data: products = [] } = useSearchProductsQuery(debouncedValue);

  useEffect(() => {
    if (!debouncedValue) {
      return;
    }

    setSearchItems(products);
  }, [debouncedValue, products]);

  const onSearch = (value: string) => {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      setIsSearchFocused(false);
      saveSearchHistory(value);
      const searchUrl = `/search?query=${encodeURIComponent(trimmedValue)}`;

      navigate(searchUrl);
      if (searchInputRef.current) {
        searchInputRef.current.blur();
      }
    }
  };

  return (
    <div className={`${styles.search}`}>
      <Search
        placeholder="Поиск..."
        onSearch={onSearch}
        onFocus={() => setIsSearchFocused(true)}
        onBlur={() => setTimeout(() => setIsSearchFocused(false), 300)}
        value={searchTerm}
        enterButton
        ref={searchInputRef}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {isSearchFocused && searchTerm && (
        <div className={styles.search_list}>
          <ul>
            {searchItems.length === 0 ? (
              <li className={styles.active}>Ничего не найдено</li>
            ) : (
              searchItems.map(({ id, title }, index) => (
                <li key={id} className={selectedItem === index ? styles.active : ''}>
                  <Link to={`/product/${id}`}>{title}</Link>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export { SearchForm };

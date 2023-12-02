import { FavoriteList } from '../../components/FavoriteList/FavoriteList';
import { useBookmarkedProducts } from '../../utils/user-data';

const FavoritePage = () => {
  const { bookmarkedProducts, isLoading } = useBookmarkedProducts();

  return <FavoriteList products={bookmarkedProducts} isLoading={isLoading} />;
};
export { FavoritePage };

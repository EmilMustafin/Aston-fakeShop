import { useParams } from 'react-router-dom';
import { DetailProduct } from '../../components/DetailProduct/DetailProduct';
import { useGetDetailProductQuery } from '../../redux/api/fakeApi';

const ProductInfo = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetDetailProductQuery(Number(id));
  if (!product) {
    return null;
  }
  return (
    <DetailProduct
      isLoading={isLoading}
      id={product.id}
      product={product}
      rating_count={product?.rating?.count || 0}
      title={product.title}
      price={product.price}
      image={product.image}
      rate={product.rating?.rate || 0}
      description={product.description || ''}
    />
  );
};

export { ProductInfo };

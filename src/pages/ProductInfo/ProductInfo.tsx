import { useParams } from 'react-router-dom';
import { DetailProduct } from '../../components/DetailProduct/DetailProduct';
import { useGetDetailProductQuery } from '../../redux/api/fakeApi';

const ProductInfo = () => {
  const { id } = useParams();
  const { data: product } = useGetDetailProductQuery(Number(id));
  if (!product) {
    return null;
  }
  return <DetailProduct {...product} />;
};

export { ProductInfo };

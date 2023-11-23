export interface IProductsProps {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating?: {
    count?: number;
    rate?: number;
  };
  title: string;
}
export interface IState {
  user: {
    email: string;
    id: string;
  };
}
export interface IFormValues {
  email: string;
  password: string;
}

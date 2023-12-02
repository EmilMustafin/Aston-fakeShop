export interface IProduct {
  category?: string;
  description?: string;
  id: number;
  image: string;
  price: number;
  rating?: {
    count?: number;
    rate?: number;
  };
  title: string;
}

export interface THistory {
  id: string;
  url: string;
  query: string;
}

export interface User {
  email: string | null;
  uid: string;
}
export interface SearchParams {
  query: string;
}
export interface IState {
  auth: {
    user: {
      email: string;
      password: string;
    };
  };
}
export interface IFormValues {
  email: string;
  password: string;
}

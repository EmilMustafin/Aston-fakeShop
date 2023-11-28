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
  query: string;
}

export interface User {
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  photoURL: string | null;
  uid: string;
}
export interface IState {
  user: {
    email: string;
    password: string;
  };
}
export interface IFormValues {
  email: string;
  password: string;
}

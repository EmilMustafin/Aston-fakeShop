import { lazy } from 'react';

export const HomePage = lazy(() => import('../pages/HomePage/Home').then(module => ({ default: module.HomePage })));

export const SearchPage = lazy(() =>
  import('../pages/SearchPage/SearchPage').then(module => ({
    default: module.SearchPage,
  })),
);

export const ProductInfo = lazy(() =>
  import('../pages/ProductInfo/ProductInfo').then(module => ({
    default: module.ProductInfo,
  })),
);

export const LogInPage = lazy(() =>
  import('../pages/SignIn/SigninPage').then(module => ({
    default: module.SigninPage,
  })),
);
export const SearchHistoryPage = lazy(() =>
  import('../pages/SearchHistoryPage/SearchHistory').then(module => ({
    default: module.SearchHistoryPage,
  })),
);

export const SignUpPage = lazy(() =>
  import('../pages/SignUp/SignupPage').then(module => ({
    default: module.SignupPage,
  })),
);

export const FavoritesPage = lazy(() =>
  import('../pages/FavoritePage/FavoritePage').then(module => ({
    default: module.FavoritePage,
  })),
);

export const LayoutPage = lazy(() =>
  import('../pages/LayoutPage/Layout').then(module => ({
    default: module.Layout,
  })),
);

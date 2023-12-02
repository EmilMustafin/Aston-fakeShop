import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Loader } from './components/Loader/Loader';
import { SigninPage } from './pages/SignIn/SigninPage';
import {
  ProductInfo,
  FavoritesPage,
  LayoutPage,
  HomePage,
  SearchHistoryPage,
  SearchPage,
  SignUpPage,
} from './routing/lazy';
import { Protected } from './routing/protectedRoute';

export function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<LayoutPage />} path="/">
            <Route path="/signin" element={<SigninPage />} />
            <Route element={<SignUpPage />} path="/signup" />
            <Route index element={<HomePage />} />
            <Route element={<ProductInfo />} path="/product/:id" />
            <Route
              path="/history"
              element={
                <Protected>
                  <SearchHistoryPage />
                </Protected>
              }
            />
            <Route
              path="/favorites"
              element={
                <Protected>
                  <FavoritesPage />
                </Protected>
              }
            />
            <Route element={<SearchPage />} path="/search" />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

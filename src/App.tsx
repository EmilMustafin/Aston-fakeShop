import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/layout/Layout';
import { FavoritePage } from './pages/FavoritesPage/FavoritePage';
import { HomePage } from './pages/HomePage/HomePage';
import { SigninPage } from './pages/SignIn/SigninPage';
import { SignupPage } from './pages/SignUp/SignupPage';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route element={<SigninPage />} path="signin" />
        <Route path="/signup" element={<SignupPage />} />
        <Route index element={<HomePage />} />
        <Route path="/product/:id" />
        <Route element={<FavoritePage />} path="/favorites" />
        <Route path="/search/:query" />
      </Route>
    </Routes>
  );
}

import { Route, Routes } from 'react-router-dom';

import './App.css';
import Layout from './pages/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route path="/login" />
        <Route path="/register" />
        <Route path="/" />
        <Route path="/product/:id" />
        <Route path="/favorites" />
        <Route path="/search/:query" />
      </Route>
    </Routes>
  );
}

export default App;

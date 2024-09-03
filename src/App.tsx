import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ProductsPage, CartPage } from './pages/';
import { AuthProvider, CartProvider } from './contexts/';
import { Login, Header, ProtectedRoute } from './components/common';

const App: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <React.StrictMode>
      <AuthProvider>
        <CartProvider>
          {!isLoginPage && <Header />}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </React.StrictMode>
  );
};

export default App;

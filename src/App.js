import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import MoviePage from './pages/MoviePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import StoreManagerPage from './pages/StoreManagerPage';

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><a href="/">Welcome</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/checkout">Checkout</a></li>
            <li><a href="/manager">Store Manager</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/movie/:movieId" element={<MoviePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/manager" element={<StoreManagerPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

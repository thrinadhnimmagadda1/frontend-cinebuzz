import React, { useState } from 'react';
import axios from '../api/axios';
import '../App.css';
const CheckoutPage = () => {
  const [checkoutData, setCheckoutData] = useState({ address: '', creditCard: '' });

  const handleCheckout = async () => {
    try {
      await axios.post('/api/Carts/Checkout', checkoutData);
      alert('Checkout successful!');
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <input
        type="text"
        placeholder="Address"
        value={checkoutData.address}
        onChange={(e) => setCheckoutData({ ...checkoutData, address: e.target.value })}
      />
      <input
        type="text"
        placeholder="Credit Card"
        value={checkoutData.creditCard}
        onChange={(e) => setCheckoutData({ ...checkoutData, creditCard: e.target.value })}
      />
      <button onClick={handleCheckout}>Submit Order</button>
    </div>
  );
};

export default CheckoutPage;

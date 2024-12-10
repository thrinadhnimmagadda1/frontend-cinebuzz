import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import '../App.css';
const CartPage = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('/api/Carts/GetCart', { params: { cartId: 1 } });
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchCart();
  }, []);

  const removeTicket = async (ticketId) => {
    try {
      await axios.put('/api/Carts/RemoveTicketFromCart', { cartId: 1, ticketId });
      setCart((prev) => ({
        ...prev,
        cartItems: prev.cartItems.filter((item) => item.ticketId !== ticketId),
      }));
    } catch (error) {
      console.error('Error removing ticket:', error);
    }
  };

  if (!cart) return <p>Loading cart...</p>;

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cart.cartItems.map((item) => (
          <li key={item.ticketId}>
            <p>Ticket: {item.ticketId}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeTicket(item.ticketId)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;

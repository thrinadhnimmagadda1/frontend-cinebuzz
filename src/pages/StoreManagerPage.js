import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import '../App.css';

const StoreManagerPage = () => {
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState({ eventName: '', price: 0, quantity: 0 });

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('/api/Tickets');
        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };
    fetchTickets();
  }, []);

  const createTicket = async () => {
    try {
      await axios.post('/api/Tickets/CreateTicket', newTicket);
      alert('Ticket created successfully!');
    } catch (error) {
      console.error('Error creating ticket:', error);
    }
  };

  return (
    <div>
      <h1>Store Manager</h1>
      <h2>Create New Ticket</h2>
      <input
        type="text"
        placeholder="Event Name"
        value={newTicket.eventName}
        onChange={(e) => setNewTicket({ ...newTicket, eventName: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={newTicket.price}
        onChange={(e) => setNewTicket({ ...newTicket, price: +e.target.value })}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={newTicket.quantity}
        onChange={(e) => setNewTicket({ ...newTicket, quantity: +e.target.value })}
      />
      <button onClick={createTicket}>Create Ticket</button>
    </div>
  );
};

export default StoreManagerPage;

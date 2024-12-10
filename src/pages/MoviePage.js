import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';
import '../App.css';
const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`/api/Movies/${movieId}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  const addToCart = async (ticketId) => {
    try {
      await axios.post('/api/Carts/AddToCart', { cartId: 1, ticketId, quantity });
      alert('Ticket added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  if (!movie) return <p>Loading movie details...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Genre: {movie.genre}</p>
      <p>Rating: {movie.rating}</p>
      <h2>Tickets</h2>
      <ul>
        {movie.tickets.map((ticket) => (
          <li key={ticket.id}>
            <p>{ticket.eventName}</p>
            <p>Price: ${ticket.price}</p>
            <p>Available: {ticket.availableQuantity}</p>
            <input
              type="number"
              value={quantity}
              min="1"
              max={ticket.availableQuantity}
              onChange={(e) => setQuantity(+e.target.value)}
            />
            <button onClick={() => addToCart(ticket.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviePage;

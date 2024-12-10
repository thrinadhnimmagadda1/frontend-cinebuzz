import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import '../App.css';

const WelcomePage = () => {
  const [movies, setMovies] = useState([]); // Initialize movies as an empty array

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Fetch movies from backend
        const response = await axios.get('http://localhost:5231/api/movies');
        console.log('Fetched movies:', response.data); // Debug API response
        setMovies(Array.isArray(response.data) ? response.data : []); // Ensure data is an array
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="welcome-page">
      <h1>Welcome to CineBuzz</h1>
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.movieId} className="movie-card">
              <h3>{movie.title}</h3>
              <p>Genre: {movie.genre}</p>
              <p>Rating: 4.5 stars</p> {/* Adjust rating dynamically if provided */}
              <Link to={`/movie/${movie.movieId}`} className="movie-link">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No movies found.</p> // Message when there are no movies
        )}
      </div>
    </div>
  );
};

export default WelcomePage;

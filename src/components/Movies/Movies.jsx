import React from 'react';
import MovieCard from './MoviesCard.jsx';
import { movies } from '../data/movies.js';
import './Movies.css';

const Movies = () => {
  return (
    <section id="movies" className="info-section">
      <h2>Our Movies</h2>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default Movies;
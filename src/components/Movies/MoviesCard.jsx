import React from 'react';
import './Movies.css'; // Make sure the path to Movies.css is correct

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-item">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p className="price">{movie.price}</p>
      <p className="day">{movie.days}</p>
      <p className="promotion">{movie.promotion}</p>
    </div>
  );
};

export default MovieCard;
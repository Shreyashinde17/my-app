import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Recommendation() {
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    // Fetch recommended movies (e.g., by genre or popularity)
    axios.get('http://localhost:5000/movies').then((res) => setRecommendedMovies(res.data));
  }, []);

  return (
    <div>
      <h1>Recommendations for You</h1>
      <div className="movie-grid">
        {recommendedMovies.map((movie) => (
          <div className="movie-card" key={movie._id}>
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendation;

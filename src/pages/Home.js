import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/movies').then((res) => setMovies(res.data));
  }, []);

  return (
    <div>
      <h1>Explore Our Wide Variety of Categories</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie._id}>
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

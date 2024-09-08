import React, { useState } from 'react';
import axios from 'axios';

function AddMovies() {
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    description: '',
    rating: '',
    poster: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/movies', formData).then((res) => {
      alert('Movie added successfully');
    });
  };

  return (
    <div>
      <h1>Add a New Movie</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Genre"
          onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
        />
        <textarea
          placeholder="Description"
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating"
          onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
        />
        <input
          type="text"
          placeholder="Poster URL"
          onChange={(e) => setFormData({ ...formData, poster: e.target.value })}
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovies;

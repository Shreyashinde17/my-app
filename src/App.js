//import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recommendation from './pages/Recommendation';
import AddMovies from './pages/AddMovies';
import Filter from './pages/Filter';
import Credits from './pages/Credits';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/add-movies" element={<AddMovies />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
    </Router>
  );
}
export default App;

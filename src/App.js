import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PopularMovies from './pages/PopularMovies';
import TopMovies from './pages/TopMovies';
import UpcomingMovies from './pages/UpcomingMovies';
import Movie from './pages/MoviePage';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  function getSearchQueryHandler(query) {
    setSearchQuery(query);
  }

  console.log(searchQuery);

  return (
    <>
      <Header onGetSearchQuery={getSearchQueryHandler} />
      <Routes>
        <Route path="/" element={<PopularMovies />} />
        <Route path="/popular" element={<PopularMovies />} />
        <Route path="/top" element={<TopMovies />} />
        <Route path="/upcoming" element={<UpcomingMovies />} />
        <Route path="/id" element={<Movie />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

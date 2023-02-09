import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PopularMovies from './pages/PopularMovies';
import TopMovies from './pages/TopMovies';
import UpcomingMovies from './pages/UpcomingMovies';
import Movie from './pages/MoviePage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PopularMovies title="Popular Movies" />} />
        <Route
          path="/popular"
          element={<PopularMovies title="Popular Movies" />}
        />
        <Route path="/top" element={<TopMovies title="Top Movies" />} />
        <Route
          path="/upcoming"
          element={<UpcomingMovies title="Upcoming Movies" />}
        />
        <Route path="/id" element={<Movie />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

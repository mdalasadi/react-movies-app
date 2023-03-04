import React, { useEffect, useState } from 'react';
import Movies from '../components/movies/Movies';
import Container from '../components/ui/Container';
import Pagination from '../components/pagination/Pagination';
import styles from './Pages.module.scss';

function TopMovies() {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    document.title = 'MovieMosaic || Top Movies';
  }, []);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=db32cb7fb5b3f64b6035a85dbfcd086d&language=en-US&page=1'
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setTopMovies(
          data.results.map((movie) => ({
            id: movie.id,
            image: movie.poster_path,
            title: movie.title,
            rate: movie.vote_average,
            release_date: new Date(movie.release_date),
          }))
        );
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <h1 className={styles['title']}>Top Movies</h1>
      <p className={styles['lead']}>
        Browse thousands of Top Movies through TMDB API
      </p>
      <Movies movies={topMovies} />
      <Pagination />
    </Container>
  );
}

export default TopMovies;

import React, { useEffect, useState } from 'react';
import Movies from '../components/movies/Movies';
import Container from '../components/ui/Container';
import styles from './Pages.module.scss';

function PopularMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    document.title = 'MovieMosaic || Popular Movies';
  }, []);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=db32cb7fb5b3f64b6035a85dbfcd086d&language=en-US&page=1'
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setMovies(
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
      <h1 className={styles['title']}>Popular Movies</h1>
      <p className={styles['lead']}>
        Browse thousands of Popular Movies through TMDB API
      </p>
      <Movies movies={movies} />
    </Container>
  );
}

export default PopularMovies;

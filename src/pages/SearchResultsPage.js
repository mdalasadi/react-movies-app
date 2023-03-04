import React, { useEffect, useState } from 'react';
import Movies from '../components/movies/Movies';
import Container from '../components/ui/Container';
import Pagination from '../components/pagination/Pagination';
import styles from './Pages.module.scss';
import { useParams } from 'react-router-dom';

function PopularMovies() {
  const [searchResults, setSearchResults] = useState([]);
  const { '*': searchQuery } = useParams();

  useEffect(() => {
    document.title = 'MovieMosaic || Popular Movies';
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=db32cb7fb5b3f64b6035a85dbfcd086d&language=en-US&query=${searchQuery}&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setSearchResults(
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
  }, [searchQuery]);

  return (
    <Container>
      <h1 className={styles['title']}>You're Searched For:</h1>
      <Movies movies={searchResults} />
      <Pagination />
    </Container>
  );
}

export default PopularMovies;

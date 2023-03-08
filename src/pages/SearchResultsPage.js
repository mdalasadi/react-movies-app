import React, { useEffect, useState } from 'react';
import Movies from '../components/movies/Movies';
import Container from '../components/ui/Container';
import Pagination from '../components/pagination/Pagination';
import styles from './Pages.module.scss';
import { useParams } from 'react-router-dom';

function PopularMovies() {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [showPagination, setShowPagination] = useState(false);
  const { '*': searchQuery } = useParams();

  useEffect(() => {
    document.title = 'MovieMosaic || Popular Movies';
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=db32cb7fb5b3f64b6035a85dbfcd086d&language=en-US&query=${searchQuery}&page=${currentPage}`
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

        setTotalPages(data.total_pages);
        setShowPagination((_) => (data.total_pages > 1 ? true : false));
      })
      .catch((error) => console.error(error));
  }, [searchQuery, currentPage]);

  function changePageHandler(page) {
    setCurrentPage(page);
  }

  return (
    <Container>
      <h1 className={styles['title']}>You're Searched For:</h1>
      <Movies movies={searchResults} />
      {showPagination && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChangePage={changePageHandler}
        />
      )}
    </Container>
  );
}

export default PopularMovies;

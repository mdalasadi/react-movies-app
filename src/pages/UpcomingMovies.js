import React, { useEffect, useState } from 'react';
import Movies from '../components/movies/Movies';
import Container from '../components/ui/Container';
import Pagination from '../components/pagination/Pagination';
import styles from './Pages.module.scss';
import Loader from '../components/ui/Loader';

function UpcomingMovies() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => {
    document.title = 'MovieMosaic || Upcoming Movies';
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=db32cb7fb5b3f64b6035a85dbfcd086d&language=en-US&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDataIsLoaded(true);

        setUpcomingMovies(
          data.results.map((movie) => ({
            id: movie.id,
            image: movie.poster_path,
            title: movie.title,
            rate: movie.vote_average,
            release_date: new Date(movie.release_date),
          }))
        );

        setTotalPages(data.total_pages);
      })
      .catch((error) => console.error(error));
  }, [currentPage]);

  function changePageHandler(page) {
    setCurrentPage(page);
  }

  let content = <Loader />;

  if (dataIsLoaded) {
    content = (
      <>
        <Movies movies={upcomingMovies} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChangePage={changePageHandler}
        />
      </>
    );
  }

  return (
    <Container>
      <h1 className={styles['title']}>Upcoming Movies</h1>
      <p className={styles['lead']}>
        Browse thousands of Upcoming Movies through TMDB API
      </p>
      {content}
    </Container>
  );
}

export default UpcomingMovies;

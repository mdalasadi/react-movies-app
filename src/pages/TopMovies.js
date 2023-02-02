import React, { useEffect } from 'react';
import Movies from '../components/movies/Movies';
import Container from '../components/ui/Container';
import styles from './Pages.module.scss';

function TopMovies(props) {
  useEffect(() => {
    document.title = 'MovieMosaic || ' + props.title;
  }, [props.title]);

  return (
    <Container>
      <h1 className={styles['title']}>{props.title}</h1>
      <p className={styles['lead']}>
        Browse thousands of {props.title} through TMDB API
      </p>
      <Movies />
    </Container>
  );
}

export default TopMovies;

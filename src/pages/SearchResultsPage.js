import React, { useEffect } from 'react';
import Movies from '../components/movies/Movies';
import Container from '../components/ui/Container';
import styles from './Pages.module.scss';
import { useParams } from 'react-router-dom';

function PopularMovies() {
  const { name } = useParams();

  useEffect(() => {
    document.title = 'MovieMosaic || Popular Movies';
  }, []);

  return (
    <Container>
      <h1 className={styles['title']}>You're Search Results:</h1>
      <Movies movies={[]} />
    </Container>
  );
}

export default PopularMovies;

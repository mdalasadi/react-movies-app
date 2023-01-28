import React, { useEffect } from 'react';
import Movies from '../components/movies/Movies';
import Container from '../components/ui/Container';

function TopMovies(props) {
  useEffect(() => {
    document.title = 'MovieMosaic || ' + props.title;
  }, [props.title]);

  return (
    <Container>
      <h1>{props.title}</h1>
      <p>Browse thousands of {props.title} through TMDB API</p>
      <Movies />
    </Container>
  );
}

export default TopMovies;

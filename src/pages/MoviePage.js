import React, { useEffect } from 'react';
import Container from '../components/ui/Container';
import MovieDetails from '../components/movies/MovieDetails';

function MoviePage() {
  useEffect(() => {
    document.title = 'MovieMosaic || Violent Night';
  }, []);

  return (
    <Container>
      <MovieDetails />
    </Container>
  );
}

export default MoviePage;

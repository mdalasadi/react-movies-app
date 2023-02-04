import React from 'react';
import Container from '../components/ui/Container';

function MovieDetails() {
  return (
    <Container>
      <section className="movie">
        <img
          src="https://image.tmdb.org/t/p/original/1XSYOP0JjjyMz1irihvWywro82r.jpg"
          alt="movie poster"
          className="movie__image"
        />
        <div className="movie__details">
          <h2>Violent Night</h2>
          <p>
            Runtime: <span>1 hr & 47 min</span>
          </p>
          <p>
            Genres: <span>Romance, Drama</span>
          </p>
          <p>
            Description:
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              natus molestias perferendis incidunt est ad?
            </span>
          </p>
          <p><a href="https://youtube.com" target="_blank" rel="noreferrer">View Trailer</a></p>
        </div>
      </section>
    </Container>
  );
}

export default MovieDetails;

import React from 'react';
import { Link } from 'react-router-dom';
import PLayIcon from '../../assets/icons/PlayIcon';
import styles from './MovieDetails.module.scss';

function MovieDetails({ movieDetails }) {
  console.log(movieDetails);

  return (
    <section className={styles['movie']}>
      <img
        src={`https://image.tmdb.org/t/p/original/${
          movieDetails?.poster ?? ''
        }`}
        alt="movie poster"
        className={styles['movie__image']}
      />
      <div className={styles['movie__details']}>
        <div className={styles['movie__link-back']}>
          <Link to="/">
            <i>&larr;</i> Go Back
          </Link>
        </div>
        <h2 className={styles['movie__title']}>{movieDetails?.title ?? ''}</h2>
        <p className={styles['movie__runtime']}>
          Runtime: <span>{movieDetails?.runtime ?? ''}</span>
        </p>
        <p className={styles['movie__genres']}>
          Genres: <span>{movieDetails?.genres?.map((genre) => genre.name).join(', ') ?? ''}</span>
        </p>
        <p className={styles['movie__desc']}>
          Description:
          <span> {movieDetails?.desc ?? ''}</span>
        </p>
        <a
          href={`https://www.youtube.com/watch?v=${
            movieDetails?.trailer ?? ''
          }`}
          target="_blank"
          className={styles['movie__trailer']}
          rel="noreferrer"
        >
          <PLayIcon /> View Trailer
        </a>
      </div>
    </section>
  );
}

export default MovieDetails;

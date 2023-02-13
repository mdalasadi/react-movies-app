import React from 'react';
import { Link } from 'react-router-dom';
import PLayIcon from '../../assets/icons/PlayIcon';
import styles from './MovieDetails.module.scss';

function MovieDetails() {
  return (
    <section className={styles['movie']}>
      <img
        src="https://image.tmdb.org/t/p/original/1XSYOP0JjjyMz1irihvWywro82r.jpg"
        alt="movie poster"
        className={styles['movie__image']}
      />
      <div className={styles['movie__details']}>
        <div className={styles['movie__link-back']}>
          <Link to="/">
            <i>&larr;</i> Go Back
          </Link>
        </div>
        <h2 className={styles['movie__title']}>Violent Night</h2>
        <p className={styles['movie__runtime']}>
          Runtime: <span>1 hr & 47 min</span>
        </p>
        <p className={styles['movie__genres']}>
          Genres: <span>Romance, Drama</span>
        </p>
        <p className={styles['movie__desc']}>
          Description:
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            natus molestias perferendis incidunt est ad?
          </span>
        </p>
        <a
          href="https://youtube.com"
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

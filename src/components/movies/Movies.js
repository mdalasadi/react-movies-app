import React from 'react';
import Poster from './Poster';
import { Link } from 'react-router-dom';
import styles from './Movies.module.scss';

function Movies(props) {
  return (
    <div className={styles['movies']}>
      {props.movies.map((poster) => (
        <Link key={poster.id} to={`/${poster.id}`}>
          <Poster
            image={poster.image}
            title={poster.title}
            rate={poster.rate}
            date={poster.release_date.getFullYear()}
          />
        </Link>
      ))}
    </div>
  );
}

export default Movies;

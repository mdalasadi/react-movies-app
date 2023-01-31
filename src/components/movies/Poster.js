import React from 'react';
import styles from './Poster.module.scss';

function Poster() {
  return (
    <div className={styles['movies__poster']}>
      <img
        src="https://image.tmdb.org/t/p/original/1XSYOP0JjjyMz1irihvWywro82r.jpg"
        alt="poster"
        className={styles['movies__image']}
      />
      <h3 className={styles['movies__title']}>Violent Night</h3>
      <div className={styles['movies__details']}>
        <p>8.7</p>
        <p>2023</p>
      </div>
    </div>
  );
}

export default Poster;

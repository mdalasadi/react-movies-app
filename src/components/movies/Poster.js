import React from 'react';
import StarIcon from '../../assets/icons/StarIcon';
import styles from './Poster.module.scss';
import noPoster from '../../assets/images/no_poster.jpeg'

function Poster(props) {
  return (
    <div className={styles['movies__poster']}>
      <img
        src={`${props.image ? 'https://image.tmdb.org/t/p/original/' + props.image : noPoster}`}
        alt={`${props.title} poster`}
        className={styles['movies__image']}
      />
      <h3 className={styles['movies__title']}>{props.title}</h3>
      <div className={styles['movies__details']}>
        <p>
          <StarIcon /> {props.rate}
        </p>
        <p>{props.date}</p>
      </div>
    </div>
  );
}

export default Poster;

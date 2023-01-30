import React from 'react';
import Poster from './Poster';
import styles from './Movies.module.scss';

function Movies() {
  return (
    <div className={styles['movies']}>
      <Poster />
      <Poster />
      <Poster />
      <Poster />
      <Poster />
      <Poster />
      <Poster />
      <Poster />
      <Poster />
      <Poster />
    </div>
  );
}

export default Movies;

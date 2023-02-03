import React from 'react';
import Poster from './Poster';
import { Link } from 'react-router-dom';
import styles from './Movies.module.scss';

function Movies() {
  return (
    <div className={styles['movies']}>
      <Link to="/id">
        <Poster />
      </Link>
      <Link to="/id">
        <Poster />
      </Link>
      <Link to="/id">
        <Poster />
      </Link>
      <Link to="/id">
        <Poster />
      </Link>
      <Link to="/id">
        <Poster />
      </Link>
      <Link to="/id">
        <Poster />
      </Link>
      <Link to="/id">
        <Poster />
      </Link>
      <Link to="/id">
        <Poster />
      </Link>
      <Link to="/id">
        <Poster />
      </Link>
      <Link to="/id">
        <Poster />
      </Link>
    </div>
  );
}

export default Movies;

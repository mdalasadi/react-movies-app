import React from 'react';
import styles from './Pagination.module.scss';

function Pagination() {
  return (
    <nav className={styles['pagination']}>
      <button className={styles['pagination__prev disabled']}>Previous</button>
      <ul className={styles['pagination__pages']}>
        <li className={styles['pagination__page active']}>1</li>
        <li className={styles['pagination__page']}>2</li>
        <li className={styles['pagination__page']}>3</li>
      </ul>
      <button className={styles['pagination__next']}>Next</button>
    </nav>
  );
}

export default Pagination;

import React from 'react';
import styles from './Pagination.module.scss';

function Pagination(props) {
  const {currentPage} = props;

  const changePageClickHandler = (event) => {
    props.onChangePage(+event.target.dataset.page)
  }

  return (
    <nav className={styles['pagination']}>
      <button type='button' className={`${styles['pagination__button']} ${styles['pagination__button--prev']} ${styles['disabled'] ?? ''}`.trim()}>Previous</button>
      <ul className={styles['pagination__pages']}>
        <li className={`${styles['pagination__page']} ${styles['active']}`.trim()}>{currentPage}</li>
        <li className={styles['pagination__page']} onClick={changePageClickHandler} data-page={currentPage + 1}>{currentPage + 1}</li>
        <li className={styles['pagination__page']} onClick={changePageClickHandler} data-page={currentPage + 2}>{currentPage + 2}</li>
      </ul>
      <button type='button' className={`${styles['pagination__button']} ${styles['pagination__button--next']}`}>Next</button>
    </nav>
  );
}

export default Pagination;

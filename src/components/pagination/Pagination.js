import React, { useState } from 'react';
import styles from './Pagination.module.scss';

function Pagination(props) {
  const [pageNumber, setPageNumber] = useState(1);

  const changePageClickHandler = (event) => {
    props.onChangePage(+event.target.dataset.page);
  };

  const nextBtnClickHandler = () => {
    if (props.totalPages <= pageNumber + 2) return;

    setPageNumber((prevState) => prevState + 3);
    props.onChangePage(pageNumber + 3);
  };

  const prevBtnClickHandler = () => {
    if (props.currentPage <= 3) return;

    setPageNumber((prevState) => prevState - 3);
    props.onChangePage(pageNumber - 3);
  };

  return (
    <nav className={styles['pagination']}>
      <button
        type="button"
        className={`${styles['pagination__button']} ${
          styles['pagination__button--prev']
        } ${props.currentPage <= 3 ? styles['disabled'] : ''}`.trim()}
        onClick={prevBtnClickHandler}
      >
        Previous
      </button>
      <ul className={styles['pagination__pages']}>
        <li
          className={`${styles['pagination__page']} ${
            pageNumber === props.currentPage ? styles['active'] : ''
          }`.trim()}
          data-page={pageNumber}
          onClick={changePageClickHandler}
        >
          {pageNumber}
        </li>
        {props.totalPages >= pageNumber + 1 && (
          <li
            className={`${styles['pagination__page']} ${
              pageNumber + 1 === props.currentPage ? styles['active'] : ''
            }`.trim()}
            data-page={pageNumber + 1}
            onClick={changePageClickHandler}
          >
            {pageNumber + 1}
          </li>
        )}
        {props.totalPages >= pageNumber + 2 && (
          <li
            className={`${styles['pagination__page']} ${
              pageNumber + 2 === props.currentPage ? styles['active'] : ''
            }`.trim()}
            data-page={pageNumber + 2}
            onClick={changePageClickHandler}
          >
            {pageNumber + 2}
          </li>
        )}
      </ul>
      <button
        type="button"
        className={`${styles['pagination__button']} ${
          styles['pagination__button--next']
        } ${
          props.totalPages <= pageNumber + 2 ? styles['disabled'] : ''
        }`.trim()}
        onClick={nextBtnClickHandler}
      >
        Next
      </button>
    </nav>
  );
}

export default Pagination;

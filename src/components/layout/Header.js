import React from 'react';
import Container from '../ui/Container';
import styles from './Header.module.scss';

function Header() {
  return (
    <nav className={styles['navbar']}>
      <Container className={styles['navbar__container']}>
        <a href="/#" className={styles['navbar__logo']}>
          <img src="logo.png" alt="MovieMosaic" />
        </a>
        <ul className={styles['navbar__nav']}>
          <li className={styles['navbar__item']}>
            <a href="/#" className={styles['navbar__link']}>
              Popular
            </a>
          </li>
          <li className={styles['navbar__item']}>
            <a href="/#" className={styles['navbar__link']}>
              Top Rated
            </a>
          </li>
          <li className={styles['navbar__item']}>
            <a href="/#" className={styles['navbar__link']}>
              Upcoming
            </a>
          </li>
          <li className={styles['navbar__item']}>
            <a href="/#" className={styles['navbar__link']}>
              Genre
            </a>
          </li>
          <li className={styles['navbar__item']}>
            <input
              type="search"
              className={styles['navbar__search']}
              placeholder="search movies..."
            />
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Header;

import React from 'react';
import Container from '../ui/Container';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <nav className={styles['navbar']}>
      <Container className={styles['navbar__container']}>
        <Link to="/" className={styles['navbar__logo']}>
          <img src={logo} alt="MovieMosaic" />
        </Link>
        <ul className={styles['navbar__nav']}>
          <li className={styles['navbar__item']}>
            <NavLink
              to="/popular"
              className={styles['navbar__link']}
              style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
            >
              Popular
            </NavLink>
          </li>
          <li className={styles['navbar__item']}>
            <NavLink
              to="/top"
              className={styles['navbar__link']}
              style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
            >
              Top Rated
            </NavLink>
          </li>
          <li className={styles['navbar__item']}>
            <NavLink
              to="/upcoming"
              className={styles['navbar__link']}
              style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
            >
              Upcoming
            </NavLink>
          </li>
          <li className={styles['navbar__item']}>
            <a href="/" className={styles['navbar__link']}>
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

import React, { useRef } from 'react';
import Container from '../ui/Container';
import styles from './Header.module.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function Header() {
  const searchInput = useRef();
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    const searchQuery = searchInput.current.value.trim();
    if (searchQuery === '') return;
    navigate(`/search/${searchQuery}`);
    searchInput.current.value = '';
  }

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
          {/* <li className={styles['navbar__item']}>
            <a href="/" className={styles['navbar__link']}>
              Genre
            </a>
          </li> */}
          <li className={styles['navbar__item']}>
            <form onSubmit={submitHandler}>
              <input
                type="search"
                ref={searchInput}
                className={styles['navbar__search']}
                placeholder="search movies..."
              />
            </form>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Header;

import React from 'react';
import Container from '../ui/Container';

function Header() {
  return (
    <nav className="navbar">
      <Container>
        <a href="/#" className="navbar__logo">
          <img src="logo.png" alt="MovieMosaic" />
        </a>
        <ul className="navbar__nav">
          <li className="navbar__item">
            <a href="/#" className="navbar__link active">
              Popular
            </a>
          </li>
          <li className="navbar__item">
            <a href="/#" className="navbar__link active">
              Top Rated
            </a>
          </li>
          <li className="navbar__item">
            <a href="/#" className="navbar__link active">
              Upcoming
            </a>
          </li>
          <li className="navbar__item">
            <a href="/#" className="navbar__link active">
              Genre
            </a>
          </li>
          <li className="navbar__item">
            <input
              type="search"
              className="navbar__search"
              placeholder="search movies..."
            />
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Header;

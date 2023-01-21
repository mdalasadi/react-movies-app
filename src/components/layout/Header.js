import React from 'react';

function Header() {
  return (
    <nav className="navbar">
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
    </nav>
  );
}

export default Header;

import React, { useEffect } from 'react';

function PopularMovies() {
  const title = 'Popular Movies';

  useEffect(() => {
    document.title = 'MovieMosaic || ' + title;
  }, []);

  return <h1>{title}</h1>;
}

export default PopularMovies;

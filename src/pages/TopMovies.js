import React, { useEffect } from 'react';

function TopMovies() {
  const title = 'Top Movies';

  useEffect(() => {
    document.title = 'MovieMosaic || ' + title;
  }, []);

  return <h1>{title}</h1>;
}

export default TopMovies;

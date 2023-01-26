import React, { useEffect } from 'react';

function UpcomingMovies() {
  const title = 'Upcoming Movies';

  useEffect(() => {
    document.title = 'MovieMosaic || ' + title;
  }, []);

  return <h1>{title}</h1>;
}

export default UpcomingMovies;

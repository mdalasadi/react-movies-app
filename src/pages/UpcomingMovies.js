import React, { useEffect } from 'react';

function UpcomingMovies(props) {
  useEffect(() => {
    document.title = 'MovieMosaic || ' + props.title;
  }, [props.title]);

  return <h1>{props.title}</h1>;
}

export default UpcomingMovies;

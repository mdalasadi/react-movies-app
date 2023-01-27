import React, { useEffect } from 'react';

function TopMovies(props) {
  useEffect(() => {
    document.title = 'MovieMosaic || ' + props.title;
  }, [props.title]);

  return <h1>{props.title}</h1>;
}

export default TopMovies;

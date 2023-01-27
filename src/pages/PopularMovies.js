import React, { useEffect } from 'react';

function PopularMovies(props) {
  useEffect(() => {
    document.title = 'MovieMosaic || ' + props.title;
  }, [props.title]);

  return <h1>{props.title}</h1>;
}

export default PopularMovies;

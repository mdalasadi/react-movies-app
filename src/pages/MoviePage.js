import React, { useEffect, useState } from 'react';
import Container from '../components/ui/Container';
import MovieDetails from '../components/movies/MovieDetails';
import { useParams } from 'react-router-dom';

function MoviePage() {
  const [movieDetails, setMovieDetails] = useState({});
  const { '*': movieID } = useParams();

  console.log(movieID);

  useEffect(() => {
    document.title = `MovieMosaic || ${movieDetails?.title ?? ''}`;
  }, [movieDetails.title]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [response1, response2] = await Promise.all([
          fetch(
            `https://api.themoviedb.org/3/movie/${movieID}?api_key=db32cb7fb5b3f64b6035a85dbfcd086d&language=en-US`
          ),
          fetch(
            `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=db32cb7fb5b3f64b6035a85dbfcd086d&language=en-US`
          ),
        ]);

        if (response1.ok && response2.ok) {
          const data1 = await response1.json();
          const data2 = await response2.json();
          setMovieDetails({
            id: data1.id,
            title: data1.original_title,
            runtime: `${Math.floor(data1.runtime / 60)} hrs ${
              data1.runtime % 60
            } min`,
            genres: data1.genres,
            desc: data1.overview,
            poster: data1.poster_path,
            trailer: data2.results.at(1).key,
          });
        } else {
          throw new Error('One or more responses were not successful');
        }
      } catch (error) {
        // Handle errors here
      }
    }

    fetchData();

    // fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=db32cb7fb5b3f64b6035a85dbfcd086d&language=en-US`),
    // fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=db32cb7fb5b3f64b6035a85dbfcd086d&language=en-US`)
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log(data);
    //   setMovieDetails({
    //     id: data.id,
    //     title: data.original_title,
    //     runtime: data.runtime,
    //     genres: data.genres,
    //     desc: data.overview,
    //     poster: data.poster_path,
    //   });
    // })
    // .catch((error) => console.error(error));
  }, [movieID]);

  return (
    <Container>
      <MovieDetails movieDetails={movieDetails} />
    </Container>
  );
}

export default MoviePage;

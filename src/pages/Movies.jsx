import { fetchMoviesByQuery } from '../API/fetchMovies';

import { lazy, useEffect, useState } from 'react';
import { MoviesTitle } from './Home/Home.styled';
import { useSearchParams, useLocation } from 'react-router-dom';

const MoviesForm = lazy(() =>
  import('../components/Movies/MoviesForm').then(module => ({
    ...module,
    default: module.MoviesForm,
  }))
);
const MoviesList = lazy(() =>
  import('../components/Movies/MoviesList').then(module => ({
    ...module,
    default: module.MoviesList,
  }))
);

export const Movies = ({ movies, setMovies }) => {
  const [query, setQuery] = useState('');
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';

  useEffect(() => {
    if (!query & !movieName) return;

    const controller = new AbortController();
    const signal = controller.signal;
    try {
      fetchMoviesByQuery(movieName ? movieName : query, signal)
        .then(({ results }) => {
          setMovies(results);
        })
        .catch();
    } catch (error) {
      console.log(error);
    }
    return () => {
      controller.abort();
      // setMovies([]);
    };
  }, [query, setMovies]);

  const onFormSubmit = ({ query }, { resetForm }) => {
    setQuery(query);
    resetForm();
    setSearchParams(query === '' ? {} : { movieName: query });
  };
  return (
    <>
      <MoviesForm onFormSubmit={onFormSubmit} />
      {movies && (
        <>
          <MoviesTitle>Movies by your query</MoviesTitle>
          <MoviesList movies={movies} location={location} />
        </>
      )}
    </>
  );
};

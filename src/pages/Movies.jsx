import { fetchMoviesByQuery } from '../API/fetchMovies';

import { useEffect, useState } from 'react';
import { MoviesList } from 'components/Home/MoviesList';
import { MoviesForm } from 'components/MoviesForm';

export const Movies = ({ movies, setMovies, setCurrIdx, setCurrId }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) return;

    try {
      fetchMoviesByQuery(query)
        .then(({ results }) => {
          setMovies(results);
        })
        .catch(e => console.log(e));
    } catch (error) {
      console.log(error);
    }
  }, [query, setMovies]);

  const onFormSubmit = (values, { resetForm }) => {
    setQuery(values.query);
    resetForm();
  };
  return (
    <>
      <MoviesForm onFormSubmit={onFormSubmit} />
      {movies && (
        <MoviesList
          movies={movies}
          setCurrIdx={setCurrIdx}
          setCurrId={setCurrId}
        />
      )}
    </>
  );
};

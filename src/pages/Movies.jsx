import { fetchMoviesByQuery } from '../API/fetchMovies';

import { useEffect, useState } from 'react';
import { MoviesList } from 'components/Home/MoviesList';
import { MoviesForm } from 'components/MoviesForm';
import { MoviesTitle } from './Home/Home.styled';
import { useSearchParams } from 'react-router-dom';

export const Movies = ({ movies, setMovies, setCurrId }) => {
  const [query, setQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('movieName');

  useEffect(() => {
    if (!query & !name) return;
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      fetchMoviesByQuery(name ? name : query, signal)
        .then(({ results }) => {
          setMovies(results);
        })
        .catch(e => console.log(e));
    } catch (error) {
      console.log(error);
    }
    return () => {
      controller.abort();
      // setMovies([]);
    };
  }, [query, setMovies]);

  const onFormSubmit = (values, { resetForm }) => {
    setQuery(values.query);
    resetForm();
    setSearchParams({ movieName: values.query });
  };
  return (
    <>
      <MoviesForm onFormSubmit={onFormSubmit} />
      {movies && (
        <>
          <MoviesTitle>Movies by your query</MoviesTitle>
          <MoviesList movies={movies} setCurrId={setCurrId} />
        </>
      )}
    </>
  );
};

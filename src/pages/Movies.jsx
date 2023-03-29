import { fetchMoviesByQuery } from '../API/fetchMovies';

import { Formik, Form, Field } from 'formik';
import { useEffect, useState } from 'react';
import { MoviesList } from 'components/Home/MoviesList';

export const Movies = ({ movies, setMovies, setCurrIdx }) => {
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
      <Formik initialValues={{ query: '' }} onSubmit={onFormSubmit}>
        <Form>
          <Field type="text" name="query" />
          <button type="submit">submit</button>
        </Form>
      </Formik>
      {movies && <MoviesList movies={movies} setCurrIdx={setCurrIdx} />}
    </>
  );
};
// тут буду делать fetch по query и передавать данные в MovieDetails

import { Home } from 'pages/Home/Home';
import { Movies } from '../pages/Movies';

import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Cast } from '../pages/MovieDetails/Cast/Cast';
import { Reviews } from '../pages/MovieDetails/Reviews/Reviews';

import { SharedLayout } from './SharedLayout';

import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

export const App = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [movies, setMovies] = useState(null);
  const [currId, setCurrId] = useState(null);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Home
                setCurrId={setCurrId}
                trendingMovies={trendingMovies}
                setTrendingMovies={setTrendingMovies}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <Movies
                setMovies={setMovies}
                movies={movies}
                setCurrId={setCurrId}
              />
            }
          />
          <Route
            path="movies/:movieId"
            element={<MovieDetails movieId={currId} />}
          >
            <Route path="cast" element={<Cast movieId={currId} />} />
            <Route path="reviews" element={<Reviews movieId={currId} />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

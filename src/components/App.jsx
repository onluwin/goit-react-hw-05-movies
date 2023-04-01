import { Home } from 'pages/Home';
import { Movies } from '../pages/Movies';

import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Cast } from '../pages/MovieDetails/Cast';
import { Reviews } from '../pages/MovieDetails/Reviews';

import { SharedLayout } from './SharedLayout';

import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const App = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [movies, setMovies] = useState(null);
  const [currIdx, setCurrIdx] = useState(null);
  const [currId, setCurrId] = useState(null);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Home
                setCurrIdx={setCurrIdx}
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
                setCurrIdx={setCurrIdx}
                setCurrId={setCurrId}
              />
            }
          />
          <Route
            path="movies/:movieId"
            element={<MovieDetails movieId={currId} />}
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

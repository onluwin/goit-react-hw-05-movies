import { Home } from 'pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetails } from '../pages/MovieDetails';

import { SharedLayout } from './SharedLayout';

import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const App = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [movies, setMovies] = useState(null);
  const [currIdx, setCurrIdx] = useState(null);

  useEffect(() => {}, [currIdx]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Home
                setCurrIdx={setCurrIdx}
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
              />
            }
          />
          <Route
            path="movies/:movieId"
            element={
              <MovieDetails
                movie={movies ? movies[currIdx] : trendingMovies[currIdx]}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

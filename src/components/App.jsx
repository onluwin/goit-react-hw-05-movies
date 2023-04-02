import { Route, Routes } from 'react-router-dom';
import { useState, lazy } from 'react';

import { SharedLayout } from './SharedLayout';

const Home = lazy(() =>
  import('../pages/Home/Home').then(module => ({
    ...module,
    default: module.Home,
  }))
);
const Movies = lazy(() =>
  import('../pages/Movies').then(module => ({
    ...module,
    default: module.Movies,
  }))
);
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails').then(module => ({
    ...module,
    default: module.MovieDetails,
  }))
);
const Cast = lazy(() =>
  import('../pages/MovieDetails/Cast/Cast').then(module => ({
    ...module,
    default: module.Cast,
  }))
);
const Reviews = lazy(() =>
  import('../pages/MovieDetails/Reviews/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);

export const App = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [movies, setMovies] = useState(null);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Home
                trendingMovies={trendingMovies}
                setTrendingMovies={setTrendingMovies}
              />
            }
          />
          <Route
            path="/movies"
            element={<Movies setMovies={setMovies} movies={movies} />}
          />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

import { lazy, useEffect } from 'react';

import { fetchTrendings } from '../../API/fetchMovies';
import { HomeTitle, TrendingSection } from './Home.styled';

const MoviesList = lazy(() =>
  import('../../components/Movies/MoviesList').then(module => ({
    ...module,
    default: module.MoviesList,
  }))
);

export const Home = ({ setCurrId, trendingMovies, setTrendingMovies }) => {
  useEffect(() => {
    try {
      fetchTrendings()
        .then(({ results }) => {
          setTrendingMovies(results);
        })
        .catch(console.log);
    } catch (error) {
      console.log(error);
    }
  }, [setTrendingMovies]);
  return (
    <main>
      <TrendingSection>
        <HomeTitle>Trending movies today</HomeTitle>
        <MoviesList movies={trendingMovies} setCurrId={setCurrId} />
      </TrendingSection>
    </main>
  );
};

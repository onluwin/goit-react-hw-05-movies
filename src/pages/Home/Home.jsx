import { MoviesList } from 'components/Home/MoviesList';
import { useEffect } from 'react';

import { fetchTrendings } from '../../API/fetchMovies';
import { HomeTitle, TrendingSection } from './Home.styled';

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

import { MoviesList } from 'components/Home/MoviesList';
import { useEffect } from 'react';

import { fetchTrendings } from '../API/fetchMovies';

export const Home = ({ setCurrIdx, trendingMovies, setTrendingMovies }) => {
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
      <section>
        <h2>Trending today</h2>
        <MoviesList movies={trendingMovies} setCurrIdx={setCurrIdx} />
      </section>
    </main>
  );
};

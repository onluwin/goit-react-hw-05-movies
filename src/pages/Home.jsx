import { TrendingMoviesList } from 'components/Home/TrendingMoviesList';
import { useEffect, useState } from 'react';

import { fetchTrendings } from '../API/fetchMovies';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    try {
      fetchTrendings()
        .then(({ results }) => {
          console.log(results);
          setTrendingMovies(results);
        })
        .catch(console.log);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <main>
      <section>
        <h2>Trending today</h2>
        <TrendingMoviesList movies={trendingMovies} />
      </section>
    </main>
  );
};

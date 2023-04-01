import { useEffect, useState } from 'react';
import { fetchCasts } from '../../../API/fetchMovies';
import { CastList } from './CastList';

export const Cast = ({ movieId }) => {
  const [casts, setCasts] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      fetchCasts(movieId, signal).then(setCasts).catch(console.log);
    } catch (error) {
      console.log(error);
    }
    return () => controller.abort();
  }, [movieId]);
  if (!casts) {
    return;
  }
  const { cast } = casts;
  if (cast.length === 0) {
    return <p>We don't have cast for this movie.</p>;
  }
  return <CastList data={cast} />;
};

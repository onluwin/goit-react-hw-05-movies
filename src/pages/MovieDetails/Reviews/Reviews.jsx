import { useEffect, useState } from 'react';
import { fetchReviews } from '../../../API/fetchMovies';
import { ReviewsList } from './ReviewsList';

export const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      fetchReviews(movieId, signal).then(setReviews).catch(console.log);
    } catch (error) {
      console.log(error);
    }
    return () => controller.abort();
  }, [movieId]);

  if (!reviews) {
    return;
  }
  if (reviews.results.length === 0) {
    return <p>We don't have any reviews for this movie</p>;
  }
  return <ReviewsList data={reviews.results} />;
};

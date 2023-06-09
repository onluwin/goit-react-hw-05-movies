import { lazy, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../../API/fetchMovies';

const ReviewsList = lazy(() =>
  import('./ReviewsList').then(module => ({
    ...module,
    default: module.ReviewsList,
  }))
);

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
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

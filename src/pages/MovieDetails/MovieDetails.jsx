import { transformUserScore } from '../../Utils/transformUserScoreToPercent';

import defaultMovieImage from '../../images/default-movie-image.jpg';

import { fetchMovieDetails } from 'API/fetchMovies';
import { Suspense, useEffect, useState, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkRef = useRef();
  backLinkRef.current = location.state?.from ?? '/movies';
  console.log('location', location);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      fetchMovieDetails(movieId, signal).then(setMovie).catch(console.log);
    } catch (error) {
      console.log(error);
    }

    return () => controller.abort();
  }, [movieId]);

  if (!movie) {
    return;
  }

  const { poster_path, release_date, overview, title, genres, vote_average } =
    movie;

  const baseUrl = 'https://image.tmdb.org/t/p/';
  const size = 'w300/';
  const imageUrl = `${baseUrl}/${size}/${poster_path}`;

  return (
    <>
      <Link to={backLinkRef.current}>Go back</Link>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <img
          src={poster_path ? imageUrl : defaultMovieImage}
          alt={`${title} poster`}
          width={300}
          style={{ marginRight: '30px' }}
        />
        <div>
          <h1>
            {title} ({release_date.slice(0, 4)})
          </h1>
          <p>User score: {transformUserScore(vote_average)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(({ name }) => `${name} `)}</p>
        </div>
      </div>
      <hr />
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to={`cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`reviews`}>Reviews</Link>
        </li>
      </ul>
      <hr />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

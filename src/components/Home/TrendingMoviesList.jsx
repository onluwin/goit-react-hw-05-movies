import { Link } from 'react-router-dom';

export const TrendingMoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ title, id }) => {
        return (
          <li key={id}>
            <Link to={`movies/${id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

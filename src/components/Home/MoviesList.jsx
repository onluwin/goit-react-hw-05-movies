import { Link } from 'react-router-dom';

export const MoviesList = ({ movies, setCurrId }) => {
  return (
    <ul>
      {movies.map(({ title, id }) => {
        return (
          <li onClick={() => setCurrId(id)} key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

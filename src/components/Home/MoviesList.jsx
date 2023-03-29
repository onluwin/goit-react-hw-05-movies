import { Link } from 'react-router-dom';

export const MoviesList = ({ movies, setCurrIdx }) => {
  return (
    <ul>
      {movies.map(({ title, id }, index) => {
        return (
          <li onClick={() => setCurrIdx(index)} key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

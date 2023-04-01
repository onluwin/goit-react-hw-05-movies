import { Link } from 'react-router-dom';

export const MoviesList = ({ movies, setCurrIdx, setCurrId }) => {
  return (
    <ul>
      {movies.map(({ title, id }, index) => {
        return (
          <li
            onClick={() => {
              setCurrIdx(index);
              setCurrId(id);
            }}
            key={id}
          >
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

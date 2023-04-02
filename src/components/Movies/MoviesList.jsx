import { Link } from 'react-router-dom';

export const MoviesList = ({ movies, setCurrId, location }) => {
  return movies.length === 0 ? (
    <h2>По вашему запросу ничего не найдено</h2>
  ) : (
    <ul>
      {movies.map(({ title, id }) => {
        return (
          <li onClick={() => setCurrId(id)} key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

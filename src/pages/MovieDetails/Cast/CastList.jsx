export const Castpst = ({ data }) => {
  console.log('data', data);
  const baseUrl = 'https://image.tmdb.org/t/p/';
  const size = 'w300/';
  return (
    <ul>
      {data.map(({ name, character, profile_path }) => (
        <li key={name}>
          <img src={`${baseUrl}/${size}/${profile_path}`} alt={name} />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

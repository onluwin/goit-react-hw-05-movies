import { fetchTrending } from 'API/fetchMovies';

export const App = () => {
  fetchTrending()
    .then(res => console.log(res))
    .catch(e => console.log(e));
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};

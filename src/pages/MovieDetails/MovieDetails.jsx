export const MovieDetails = ({ movie }) => {
  if (!movie) {
    return;
  }
  const { poster_path } = movie;
  console.log(poster_path);
  return (
    <main>
      <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
    </main>
  );
};

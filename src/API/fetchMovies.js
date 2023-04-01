import axios from 'axios';

const apiKey = '78b03767048a6745695471bf0cbbdec0';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendings = async () => {
  const searchString = `trending/movie/day?api_key=${apiKey}`;
  const { data } = await axios.get(searchString);
  return data;
};

export const fetchMoviesByQuery = async (query, signal) => {
  const searchString = `search/movie?api_key=${apiKey}&query=${query}`;
  const { data } = await axios.get(searchString, { signal });
  return data;
};

export const fetchMovieDetails = async (movieId, signal) => {
  const searchString = `movie/${movieId}?api_key=${apiKey}`;
  const { data } = await axios.get(searchString, { signal });
  return data;
};

export const fetchCasts = async (movieId, signal) => {
  const searchString = `/movie/${movieId}/credits?api_key=${apiKey}`;
  const { data } = await axios(searchString, { signal });
  return data;
};

export const fetchReviews = async (movieId, signal) => {
  const searchString = `/movie/${movieId}/reviews?api_key=${apiKey}&append_to_response=reviews`;
  const { data } = await axios.get(searchString, { signal });
  return data;
};

import axios from 'axios';

const apiKey = '78b03767048a6745695471bf0cbbdec0';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendings = async () => {
  const searchString = `trending/movie/day?api_key=${apiKey}`;
  const { data } = await axios.get(searchString);
  return data;
};

export const fetchMoviesByQuery = async query => {
  const searchString = `search/movie?api_key=${apiKey}&query=${query}`;
  const { data } = await axios.get(searchString);
  return data;
};

export const fetchMovieDetails = async movieId => {
  const searchString = `movie/${movieId}?api_key=${apiKey}`;
  const { data } = await axios.get(searchString);
  return data;
};

export const fetchCasts = async movieId => {
  const searchString = `/movie/${movieId}/credits?append_to_response=reviews`;
  const { data } = await axios(searchString);
  return data;
};

export const fetchReviews = async movieId => {
  const searchString = `/movie/${movieId}/reviews`;
  const { data } = await axios.get(searchString);
  return data;
};

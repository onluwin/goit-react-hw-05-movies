import axios from 'axios';

const apiKey = '78b03767048a6745695471bf0cbbdec0';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrending = async () => {
  const searchString = `trending/movie/day?api_key=${apiKey}`;
  const { data } = await axios.get(searchString);
  return data;
};

import axios from 'axios';

const API_KEY = '5257856f789bada50296aabdc3a8b8f3';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingDay = async () => {
  const data = await axios(
    `/trending/all/day?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getSearchQuery = async query => {
  const data = await axios(
    `/search/movie?query=${query}&api_key=${API_KEY}&include_adult=false&language=en-US&page=1`
  );
  return data;
};

export const getMoviesDetails = async id => {
  const data = await axios(`/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const getMoviesCast = async id => {
  const data = await axios(`/movie/${id}/credits?api_key=${API_KEY}`);
  return data;
};

export const getMoviesReviews = async id => {
  const data = await axios(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return data;
};

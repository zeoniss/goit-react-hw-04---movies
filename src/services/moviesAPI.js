import axios from 'axios';
const BASE_URL = `https://api.themoviedb.org/3/`;
const API_KEY = '5bd6ad96507df17f527e79159d832690';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
};

const fetchTrending = async () => {
  return await axios
    .get(`${BASE_URL}trending/all/day?api_key=${API_KEY}`)
    .then(response => response.data.results);
};

const fetchDetails = async filmID => {
  return await axios
    .get(`${BASE_URL}movie/${filmID}?api_key=${API_KEY}`)
    .then(response => response.data);
};

const fetchMoviesSearch = async query => {
  return await axios
    .get(`${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}`)
    .then(response => response.data.results);
};

const fetchMovieReview = async filmID => {
  return await axios
    .get(`${BASE_URL}movie/${filmID}/reviews?api_key=${API_KEY}`)
    .then(response => response.data.results);
};

const fetchMovieCast = async filmID => {
  return await axios
    .get(`${BASE_URL}movie/${filmID}/credits?api_key=${API_KEY}`)
    .then(response => response.data.cast);
};

//eslint-disable-next-line
export default {
  fetchTrending,
  fetchDetails,
  fetchMoviesSearch,
  fetchMovieReview,
  fetchMovieCast,
};

import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const get = (category, type) => {
  return axios
    .get(`${BASE_URL}${type}/${category}?api_key=${API_KEY} `)
    .then(data => {
      const movies = data.data.results;

      return movies;
    })
    .catch(error => {
      console.log(error);
    });
};
export const search = (category, query) => {
  return axios
    .get(`${BASE_URL}search/${category}?api_key=${API_KEY}&query=${query} `)
    .then(data => {
      const movies = data.data.results;

      return movies;
    })
    .catch(error => {
      console.log(error);
    });
};

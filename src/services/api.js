import { API_KEY, BASE_URL } from "../config/api_config";
import axios from "axios";

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

import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const createUser = (data) => {
  return axios.post(`${BASE_URL}/user/create`, data)
    .then(response => response.data)
    .catch(error => {
      console.error("There was an error creating the user!", error);
      throw error; // Rethrow the error to handle it later if needed
    });
};

export const loginUser = (data) => {
  return axios.post(`${BASE_URL}/auth/login`, data)
    .then(response => response.data)
    .catch(error => {
      console.error("There was an error logging in!", error);
      throw error; // Rethrow the error to handle it later if needed
    });
};

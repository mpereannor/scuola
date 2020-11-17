import axios from "axios";
import Cookies from 'js-cookie'
const baseURL = 'http://localhost:7000/'

export const Axios = () => {
  return axios.create({
    headers: {
        Accept: 'application/json',
      "Content-Type": "application/json",
    },
    baseURL,
  });
};

export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Credentials': true,
      Authorization: Cookies.get('sessionId')
    //   .get('token')
    },
    credentials: 'include',
    baseURL,
    withCredentials: true
  });
};

// headers: {authorization: localStorage.getItem('authorization') ? localStorage.getItem('authorization') : null},

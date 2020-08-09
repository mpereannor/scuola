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
      'Access-Control-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    //   cookie: Cookies.get('token'),
      Authorization: Cookies.get('token')
    // 'token': Cookies.get('token')
    },
    credentials: 'include',
    baseURL,
    withCredentials: true
  });
};

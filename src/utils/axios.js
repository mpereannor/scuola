import axios from "axios";
import Cookies from 'js-cookie';
// const baseURL = 'http://localhost:7000/';
const baseURL = 'http://ec2-35-178-134-215.eu-west-2.compute.amazonaws.com';

const origin = 'http://localhost:3000';

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
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin": ["http://localhost:3000","https://scuola.netlify.app"],
      Authorization: Cookies.get('sessionId')
    },
    credentials: 'include',                          
    baseURL,
    withCredentials: true
  });
};



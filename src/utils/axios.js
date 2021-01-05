import axios from "axios";
import Cookies from 'js-cookie';
// const baseURL = 'http://localhost:7000/';
const baseURL = 'http://ec2-18-134-244-164.eu-west-2.compute.amazonaws.com:7000/';

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
      "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
      Authorization: Cookies.get('sessionId')
    },
    credentials: 'include',                          
    baseURL,
    withCredentials: true
  });
};



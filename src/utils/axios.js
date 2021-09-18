import axios from "axios";
const baseURL = 'http://localhost:7000/';
// const baseURL = 'http://ec2-35-178-134-215.eu-west-2.compute.amazonaws.com';
// const baseURL = 'https://scuola-server.herokuapp.com';

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


export  function axiosWithAuth() {
    const token =
      localStorage.getItem('token');
    const axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
  
    return axiosInstance;
  }


// export const axiosWithAuth = () => {
//   return axios.create({
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Credentials": "true",
//       "Access-Control-Allow-Origin": ["http://localhost:3000","https://scuola.netlify.app"],
//       Authorization: Cookies.get('sessionId')
//     },
//     credentials: 'include',                          
//     baseURL,
//     withCredentials: true
//   });
// };



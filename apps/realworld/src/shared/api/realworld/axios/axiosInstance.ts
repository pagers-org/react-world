import defaultAxios from 'axios';

export const axiosInstance = defaultAxios.create({
  baseURL: 'https://api.realworld.io/api/',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    accept: 'application/json',
  },
});

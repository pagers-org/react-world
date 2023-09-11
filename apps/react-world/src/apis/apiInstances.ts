import axios, { AxiosRequestConfig } from 'axios';

// TODO: 향후 .env 파일로 분리
const BASE_URL = 'https://api.realworld.io/api';

// 단순 GET 요청으로 인증이 필요없는 경우
const axiosApi = (url: string, options?: AxiosRequestConfig) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};

// POST, DELETE 등 요청 시 인증이 필요한 경우
const axiosAuthApi = (url: string, options?: AxiosRequestConfig) => {
  const jwtToken = '토큰 값'; // TODO: 향후 개발
  const instance = axios.create({
    baseURL: url,
    headers: { Authorization: 'Bearer ' + jwtToken },
    ...options,
  });
  return instance;
};

export const api = axiosApi(BASE_URL);
export const authApi = axiosAuthApi(BASE_URL);

import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import Cookies from 'js-cookie';

// TODO: 향후 .env 파일로 분리
const BASE_URL = 'https://api.realworld.io/api';

// 단순 GET 요청으로 인증이 필요없는 경우
const axiosApi = (url: string, options?: AxiosRequestConfig) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};

// POST, DELETE 등 요청 시 인증이 필요한 경우
const axiosAuthApi = (url: string, options?: AxiosRequestConfig) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};

export const api = axiosApi(BASE_URL);
export const authApi = axiosAuthApi(BASE_URL);

// 요청 전 JWT 쿠키 유무를 확인 후 Bearer 헤더 설정
authApi.interceptors.request.use(config => {
  const jwtToken = Cookies.get('jwtToken');

  if (jwtToken) {
    config.headers.Authorization = 'Bearer ' + jwtToken; // 토큰이 있을 때 헤더에 추가
  }

  return config;
});

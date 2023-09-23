import defaultAxios, { AxiosRequestConfig } from 'axios';
import { authInterceptor } from './requestInterceptors/authInterceptor';

const axios = defaultAxios.create({
  baseURL: 'https://api.realworld.io/api/',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    accept: 'application/json',
  },
});

axios.interceptors.request.use(authInterceptor);

export const axiosInstance = async <T>(config: AxiosRequestConfig): Promise<T> => {
  config.data;
  const data = await axios(config);

  return data.data;
};

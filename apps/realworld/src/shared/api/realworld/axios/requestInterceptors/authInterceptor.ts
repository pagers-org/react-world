import webStorage, { StorageKey } from '@/shared/utils/webStorage';
import { InternalAxiosRequestConfig } from 'axios';

export const authInterceptor: (value: InternalAxiosRequestConfig) => InternalAxiosRequestConfig = config => {
  const token = webStorage.getItem(StorageKey.userToken);

  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }

  return config;
};

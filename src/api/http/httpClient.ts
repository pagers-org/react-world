import { COMMON_HEADERS, HTTP_METHOD } from '@/constants/api';
import { API_BASE_URL } from '@/constants/env';

class HttpClient {
  BASE_URL = API_BASE_URL;

  constructor() {}

  get(url: string, options: RequestInit) {
    return fetch(`${this.BASE_URL}${url}`, {
      ...options,
      method: HTTP_METHOD.GET,
      headers: {
        ...COMMON_HEADERS,
        ...options.headers,
      },
    });
  }

  post(url: string, options: RequestInit) {
    return fetch(`${this.BASE_URL}${url}`, {
      ...options,
      method: HTTP_METHOD.POST,
      headers: {
        ...COMMON_HEADERS,
        ...options.headers,
      },
    });
  }

  put(url: string, options: RequestInit) {
    return fetch(`${this.BASE_URL}${url}`, {
      ...options,
      method: HTTP_METHOD.PUT,
      headers: {
        ...COMMON_HEADERS,
        ...options.headers,
      },
    });
  }

  delete(url: string, options: RequestInit) {
    return fetch(`${this.BASE_URL}${url}`, {
      ...options,
      method: HTTP_METHOD.DELETE,
      headers: {
        ...COMMON_HEADERS,
        ...options.headers,
      },
    });
  }
}

export const httpClient = new HttpClient();

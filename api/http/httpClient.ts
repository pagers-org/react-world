import { HTTP_METHOD, COMMON_HEADERS } from '@/constants/api';
import { API_BASE_URL } from '@/constants/env';

class HttpClient {
  BASE_URL = API_BASE_URL;

  constructor() {}

  async request(url: string, options: any, method: string) {
    const response = await fetch(`${this.BASE_URL}${url}`, {
      method,
      headers: {
        ...COMMON_HEADERS,
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response;
  }

  get(url: string, options = {}) {
    return this.request(url, options, HTTP_METHOD.GET);
  }

  post(url: string, options = {}) {
    return this.request(url, options, HTTP_METHOD.POST);
  }

  put(url: string, options = {}) {
    return this.request(url, options, HTTP_METHOD.PUT);
  }

  delete(url: string, options = {}) {
    return this.request(url, options, HTTP_METHOD.DELETE);
  }
}

export const httpClient = new HttpClient();

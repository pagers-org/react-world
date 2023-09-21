import axios, { type AxiosInstance } from 'axios';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const DEFAULT_TIMEOUT = 5_000;

export class HttpClient {
  protected instance: AxiosInstance;
  protected routeInstance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: API_BASE_URL,
      timeout: DEFAULT_TIMEOUT,
    });
    this.routeInstance = axios.create({
      baseURL: '/',
      timeout: DEFAULT_TIMEOUT,
    });
  }
}

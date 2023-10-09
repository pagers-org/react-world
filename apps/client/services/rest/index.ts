import axios, {
    AxiosInstance,
    AxiosResponse,
    AxiosRequestConfig,
    CustomParamsSerializer,
} from 'axios';
import { stringify } from 'qs';

class HttpClient {
    private static readonly instance: HttpClient = new HttpClient();
    private readonly axiosInstance: AxiosInstance;

    private constructor() {
        this.axiosInstance = axios.create({
            baseURL: process.env.NEXT_PUBLIC_REST_API_BASE_URL,
            paramsSerializer: {
                serialize: stringify as CustomParamsSerializer,
            },
        });
    }

    public static getInstance(): HttpClient {
        return HttpClient.instance;
    }

    private async makeRequest<T>(config: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> =
                await this.axiosInstance.request<T>(config);
            return response.data;
        } catch (error: any) {
            throw error;
        }
    }

    public async get<T, P>(url: string, params?: P): Promise<T> {
        return this.makeRequest<T>({ method: 'get', url, params });
    }

    public async post<T, P>(url: string, data?: P): Promise<T> {
        return this.makeRequest<T>({ method: 'post', url, data });
    }

    public async delete<T>(url: string): Promise<T> {
        return this.makeRequest<T>({ method: 'delete', url });
    }

    public async patch<T, P>(url: string, data?: P): Promise<T> {
        return this.makeRequest<T>({ method: 'patch', url, data });
    }
}

export const httpClient = HttpClient.getInstance();

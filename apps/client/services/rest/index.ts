import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

class HttpClient {
    private static readonly instance: HttpClient = new HttpClient();
    private readonly axiosInstance: AxiosInstance;

    private constructor() {
        this.axiosInstance = axios.create({
            baseURL: process.env.NEXT_PUBLIC_REST_API_BASE_URL,
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
        } catch (error) {
            throw error;
        }
    }

    public async get<T>(url: string, params?: object): Promise<T> {
        return this.makeRequest<T>({ method: 'get', url, params });
    }

    public async post<T>(url: string, data?: object): Promise<T> {
        return this.makeRequest<T>({ method: 'post', url, data });
    }

    public async delete<T>(url: string): Promise<T> {
        return this.makeRequest<T>({ method: 'delete', url });
    }

    public async patch<T>(url: string, data?: object): Promise<T> {
        return this.makeRequest<T>({ method: 'patch', url, data });
    }
}

export const httpClient = HttpClient.getInstance();

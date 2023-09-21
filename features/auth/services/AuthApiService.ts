import { AxiosError } from 'axios';

import { FieldValues } from '@/app/register/page';

import { HttpClient } from '@/src/services/HttpClient';

import { LoginResponse, RegisterResponse } from '@/features/auth/types';

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest extends LoginRequest {
  username: string;
}

class AuthApiService extends HttpClient {
  async login({ email, password }: LoginRequest): Promise<LoginResponse> {
    const { data } = await this.routeInstance.post<LoginResponse>(
      'api/auth/login',
      {
        email,
        password,
      },
    );

    return data;
  }

  async register({
    username,
    email,
    password,
  }: RegisterRequest): Promise<RegisterResponse> {
    try {
      const { data } = await this.instance.post<RegisterResponse>('users', {
        user: { username, email, password },
      });

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 422) {
          throw error.response.data.errors as Record<
            keyof FieldValues,
            string[]
          >;
        }
      }

      throw new Error((error as Error).message);
    }
  }
}

export const authApiService = new AuthApiService();

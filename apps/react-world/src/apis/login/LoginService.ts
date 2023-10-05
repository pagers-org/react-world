import { isAxiosError } from 'axios';
import { api } from '../apiInstances';
import type { LoginUserParams, LoginUserResponse } from './LoginService.types';

class LoginService {
  static async loginUser(
    userData: LoginUserParams,
  ): Promise<LoginUserResponse> {
    try {
      const response = await api.post('/users/login', {
        user: userData,
      });
      return response.data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        console.error('Axios error occurred:', error.response.data);
        throw error.response.data;
      }
      console.error('An unexpected error occurred:', error);
      throw error;
    }
  }
}

export default LoginService;

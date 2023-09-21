import { isAxiosError } from 'axios';
import { api } from '../apiInstances';
import type {
  RegisterUserParams,
  RegisterUserResponse,
} from './RegisterService.types';

class RegisterService {
  static async registerUser(
    userData: RegisterUserParams,
  ): Promise<RegisterUserResponse> {
    try {
      const response = await api.post('/users', {
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

export default RegisterService;

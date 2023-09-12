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
        throw error.response.data;
      }
      throw error;
    }
  }
}

export default RegisterService;

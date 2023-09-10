import axios, { AxiosError } from 'axios';
import {
  RegisterUserParams,
  RegisterUserErrors,
  RegisterUserResponse,
} from './RegisterService.types';
import { BASE_URL, API_PATH } from '../ApiConstants';

class RegisterService {
  static async registerUser(
    userData: RegisterUserParams,
  ): Promise<RegisterUserResponse> {
    const ENDPOINT = `${BASE_URL}${API_PATH.USERS.REGISTER}`;

    try {
      const response = await axios.post(ENDPOINT, {
        user: userData,
      });
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<RegisterUserErrors>;

      if (axiosError && axiosError.response) {
        throw axiosError.response.data;
      }
      throw error;
    }
  }
}

export default RegisterService;

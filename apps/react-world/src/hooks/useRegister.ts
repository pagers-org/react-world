import { useState } from 'react';
import type {
  RegisterUserErrors,
  RegisterUserParams,
  RegisterUserResponse,
} from '../apis/register/RegisterService.types';
import RegisterService from '../apis/register/RegisterService';

const useRegister = () => {
  const [userData, setUserData] = useState<RegisterUserParams>({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState<RegisterUserErrors | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const register = async (): Promise<RegisterUserResponse | null> => {
    try {
      setIsLoading(true);

      // TODO: 로그 제거
      console.log('userData: ' + JSON.stringify(userData, null, 2));
      const response = await RegisterService.registerUser(userData);
      console.log('response: ' + JSON.stringify(response, null, 2));

      // TODO: 임시로 로컬 스토리지에 토큰 저장
      localStorage.setItem('jwtToken', response.user.token);

      setIsLoading(false);
      return response;
    } catch (error) {
      setIsLoading(false);

      // TODO: 로그 제거
      console.log('error: ' + JSON.stringify(error, null, 2));
      if (error && typeof error === 'object' && 'errors' in error) {
        setError(error.errors as RegisterUserErrors);
      } else {
        console.error('An unexpected error occurred:', error);
      }
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await register();
  };

  return {
    userData,
    error,
    isLoading,
    handleInputChange,
    handleSubmit,
  };
};

export default useRegister;

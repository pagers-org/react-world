import { useState } from 'react';
import type { LoginUserErrors } from '../apis/login/LoginService.types'; // 로그인 관련 타입으로 수정
import LoginService from '../apis/login/LoginService'; // LoginService로 수정
import { saveTokenToCookie } from '@utils/jwtUtils';
import type { UserCredentials } from '@appTypes/UserCredentials';

export type LoginStatus = 'idle' | 'loggingIn' | 'success' | 'failed';

const useLogin = () => {
  const [loginError, setLoginError] = useState<LoginUserErrors | null>(null);
  const [loginStatus, setLoginStatus] = useState<LoginStatus>('idle');

  const handleLogin = async (data: UserCredentials) => {
    try {
      setLoginStatus('loggingIn');
      const response = await LoginService.loginUser(data);
      // JWT 토큰을 쿠키에 저장
      if (response && response.user && response.user.token) {
        saveTokenToCookie(response.user.token);
      }
      setLoginStatus('success');
      console.log('login suceess');
      return response;
    } catch (error) {
      if (error && typeof error === 'object' && 'errors' in error) {
        setLoginError(error.errors as LoginUserErrors);
        console.error('LoginUserErrors: ', error.errors);
      } else {
        console.error('An unexpected error occurred:', error);
      }
      setLoginStatus('failed');
      return null;
    }
  };

  return {
    loginError,
    loginStatus,
    handleLogin,
  };
};

export default useLogin;

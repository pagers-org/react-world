import { useReducer } from 'react';
import type { LoginUserErrors } from '@/apis/login/LoginService.types'; // 로그인 관련 타입으로 수정
import LoginService from '@/apis/login/LoginService'; // LoginService로 수정
import { saveTokenToCookie } from '@/utils/jwtUtils';
import type { UserCredentials } from '@/app-types/UserCredentials';

export type LoginStatus = 'idle' | 'loggingIn' | 'success' | 'failed';

type LoginState = {
  loginError: LoginUserErrors | null;
  loginStatus: LoginStatus;
};

type LoginAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; token: string }
  | { type: 'LOGIN_ERROR'; error: LoginUserErrors }
  | { type: 'LOGIN_FAILED' };

const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, loginStatus: 'loggingIn', loginError: null };
    case 'LOGIN_SUCCESS':
      return { ...state, loginStatus: 'success', loginError: null };
    case 'LOGIN_ERROR':
      return { ...state, loginStatus: 'failed', loginError: action.error };
    case 'LOGIN_FAILED':
      return { ...state, loginStatus: 'failed' };
    default:
      return state;
  }
};

const useLogin = () => {
  const [state, dispatch] = useReducer(loginReducer, {
    loginError: null,
    loginStatus: 'idle',
  });

  const handleLogin = async (data: UserCredentials) => {
    dispatch({ type: 'LOGIN_START' });

    try {
      const response = await LoginService.loginUser(data);
      // JWT 토큰을 쿠키에 저장
      if (response && response.user && response.user.token) {
        saveTokenToCookie(response.user.token);
        dispatch({ type: 'LOGIN_SUCCESS', token: response.user.token });
        console.log('login suceess');
      }
      return response;
    } catch (error) {
      if (error && typeof error === 'object' && 'errors' in error) {
        dispatch({
          type: 'LOGIN_ERROR',
          error: error.errors as LoginUserErrors,
        });
        console.error('LoginUserErrors: ', error.errors);
      } else {
        dispatch({ type: 'LOGIN_FAILED' });
        console.error('An unexpected error occurred:', error);
      }
      return null;
    }
  };

  return {
    loginError: state.loginError,
    loginStatus: state.loginStatus,
    handleLogin,
  };
};

export default useLogin;

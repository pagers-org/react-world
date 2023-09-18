import { LoginUser, NewUser, UpdateUser } from '@/types';
import { http } from '@/utils/http';

// 회원가입
const registerUserAPI = async (user: NewUser) => {
  return http.post('/users', { user });
};

// 로그인
const loginAPI = async (user: LoginUser) => {
  return http.post('/users/login', { user });
};

// 회원정보 수정
const updateUserAPI = async (user: UpdateUser, auth: string) => {
  return http.put(
    '/user',
    { user },
    {
      headers: {
        Authorization: `Token ${auth}`,
      },
    }
  );
};

// 현재 유저 조회
const getUserAPI = async (auth: string) => {
  return http.get('/user', {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Token ${auth}`,
    },
  });
};

export { registerUserAPI, loginAPI, getUserAPI, updateUserAPI };

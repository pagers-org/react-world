import { http } from '@/libs/http';
import { LoginUser } from '@/types';

const login = (user: LoginUser) => {
  return http.post('https://api.realworld.io/api/users/login', user);
};

const logout = () => {
  console.log('로그아웃');
};

const getUser = () => {
  return http.get('https://api.realworld.io/api/user');
};

const updateUser = () => {
  return http.put('https://api.realworld.io/api/user');
};

export { login, logout, getUser, updateUser };

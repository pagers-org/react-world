import { http } from '@/libs/http';
import { LoginUser, NewUser } from '@/types';
import Error from 'next/error';

const registerUser = async (user: NewUser) => {
  try {
    const response = await http.post('https://api.realworld.io/api/users', { user });
    return response;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
};

const login = async (user: LoginUser) => {
  return await http.post('https://api.realworld.io/api/users/login', { user });
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

export { registerUser, login, logout, getUser, updateUser };

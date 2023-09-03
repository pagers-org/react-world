import { User } from '@/types';
import axios from 'axios';

// 로그인
const login = () => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/login`);
};

// 회원가입
const register = (user: User) => {
  console.log(user);
  console.log(process.env.NEXT_PUBLIC_API_URL);
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users`, user);
};

// 유저 정보 조회
const fetchUser = () => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user`);
};

// 유저 정보 수정
const updateUser = () => {
  return axios.put(`${process.env.NEXT_PUBLIC_API_URL}/user`);
};

export { login, register, fetchUser, updateUser };

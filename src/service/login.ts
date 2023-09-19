import {  API_BASE_URL } from '@/utils';

interface User {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}

interface UserResponse {
  user: User;
}

export interface LoginInfo {
  user: {
    email: string;
    password: string;
  };
}

export const postLogin = async (loginInfo: LoginInfo): Promise<UserResponse> => 
  fetch(`${API_BASE_URL}users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginInfo),
  }).then(res => res.json());
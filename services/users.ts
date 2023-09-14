import { API_BASE_URL } from '@/constants/env';
import { LoginUser, NewUser, UpdateUser } from '@/types';
import { getCookie } from '@/utils/cookies';
import Error from 'next/error';

// Register a new user
const registerUserAPI = async (user: NewUser) => {
  console.log(user);

  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ user }),
  }).then(res => {
    if (!(res.status === 201)) {
      throw new Error('Error');
    }
    return res.json();
  });
};

// Login for existing user
const loginAPI = async (user: LoginUser) => {
  return fetch(`${API_BASE_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ user }),
  }).then(res => {
    if (!(res.status === 200)) {
      throw new Error('Error');
    }
    return res.json();
  });
};

// Updated user information for current user
const updateUserAPI = async (user: UpdateUser) => {
  const accessToken = getCookie('token');
  console.log(accessToken);

  return fetch(`${API_BASE_URL}/user`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json; charset=utf-8', Authorization: `Token ${accessToken}` },
    body: JSON.stringify({ user }),
  }).then(res => {
    if (!(res.status === 200)) {
      throw new Error('Error');
    }
    return res.json();
  });
};

// Gets the currently logged-in user
const getUserAPI = async () => {
  const accessToken = getCookie('token');
  return fetch(`${API_BASE_URL}/user`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json; charset=utf-8', Authorization: `Token ${accessToken}` },
  }).then(res => {
    if (!(res.status === 200)) {
      throw new Error('Error');
    }
    return res.json();
  });
};

export { registerUserAPI, loginAPI, getUserAPI, updateUserAPI };

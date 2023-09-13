/* Client Side APIs */
import {
  LoginPostRequestType,
  RegisterPostRequestType,
  UpdatePutRequestType,
  UsersResponseType,
} from '@/types/auth';

import { BASE_HEADER, BASE_URL } from '@/constants/auth';

// Login for existing user
const postUserLogin = async (
  request: LoginPostRequestType,
  options: RequestInit = {},
): Promise<UsersResponseType> => {
  return await fetch(`${BASE_URL}/users/login`, {
    ...options,
    method: 'post',
    headers: {
      ...BASE_HEADER,
    },
    body: JSON.stringify(request),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// Register a new user
const postUserRegister = async (
  request: RegisterPostRequestType,
  options: RequestInit = {},
): Promise<UsersResponseType> => {
  return await fetch(`${BASE_URL}/users`, {
    ...options,
    method: 'post',
    headers: {
      ...BASE_HEADER,
    },
    body: JSON.stringify(request),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// Updated user information for current user
const putCurrentUser = async (
  payload: UpdatePutRequestType,
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<UsersResponseType | string> => {
  const accessToken = getCookie(COOKIE_ACCESS_TOKEN_KEY);

  return await fetch(`${BASE_URL}/user`, {
    ...options,
    method: 'put',
    headers: {
      ...BASE_HEADER,
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// -----------------------------------------------------------------------------------------------------

/* Server Side APIs for Next 13 APP Router extended fetch api */

// Gets the currently logged-in user
const getCurrentUser = async (
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<UsersResponseType> => {
  return await fetch(`${BASE_URL}/user`, {
    ...options,
    method: 'get',
    headers: {
      ...BASE_HEADER,
      ...headers,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export { postUserRegister, postUserLogin, putCurrentUser, getCurrentUser };

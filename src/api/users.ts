import {
  CurrentUserPayload,
  UserLoginPayload,
  UserRegisterPayload,
  UserResponse,
} from '@/types/api/users';

import { COMMON_HEADERS, HTTP_METHOD } from '@/constants/api';
import { API_BASE_URL } from '@/constants/env';
import { COOKIE_ACCESS_TOKEN_KEY } from '@/constants/key';

import { getCookie } from '@/utils/cookie';

/* Client Side APIs */

// Login for existing user
export const postUserLogin = (
  payload: UserLoginPayload,
  options: RequestInit = {},
): Promise<UserResponse> => {
  return fetch(`${API_BASE_URL}/users/login`, {
    ...options,
    method: HTTP_METHOD.POST,
    headers: {
      ...COMMON_HEADERS,
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// Register a new user
export const postUserRegister = (
  payload: UserRegisterPayload,
  options: RequestInit = {},
): Promise<UserResponse> => {
  return fetch(`${API_BASE_URL}/users`, {
    ...options,
    method: HTTP_METHOD.POST,
    headers: {
      ...COMMON_HEADERS,
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// Updated user information for current user
export const putCurrentUser = (
  payload: CurrentUserPayload,
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<UserResponse> => {
  const accessToken = getCookie(COOKIE_ACCESS_TOKEN_KEY);

  return fetch(`${API_BASE_URL}/user`, {
    ...options,
    method: HTTP_METHOD.PUT,
    headers: {
      ...COMMON_HEADERS,
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
export const getCurrentUser = (
  headers: HeadersInit = {},
  options: RequestInit = {},
): Promise<UserResponse> => {
  return fetch(`${API_BASE_URL}/user`, {
    ...options,
    method: HTTP_METHOD.GET,
    headers: {
      ...COMMON_HEADERS,
      ...headers,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

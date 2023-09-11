import {
  CurrentUserPayload,
  UserLoginPayload,
  UserRegisterPayload,
  UserResponse,
} from '@/types/api/users';

import { COMMON_HEADERS, HTTP_METHOD } from '@/constants/api';
import { API_BASE_URL } from '@/constants/env';

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

// Gets the currently logged-in user
export const getCurrentUser = (
  options: RequestInit = {},
): Promise<UserResponse> => {
  const accessToken = localStorage.getItem('access-token');

  return fetch(`${API_BASE_URL}/user`, {
    ...options,
    method: HTTP_METHOD.GET,
    headers: {
      ...COMMON_HEADERS,
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// Updated user information for current user
export const putCurrentUser = (
  payload: CurrentUserPayload,
  options: RequestInit = {},
): Promise<UserResponse> => {
  const accessToken = localStorage.getItem('access-token');

  return fetch(`${API_BASE_URL}/user`, {
    ...options,
    method: HTTP_METHOD.PUT,
    headers: {
      ...COMMON_HEADERS,
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

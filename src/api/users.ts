import {
  CurrentUserPayload,
  UserLoginPayload,
  UserRegisterPayload,
  UserResponse,
} from '@/types/api/users';

import { ERROR } from '@/constants/error';
import { COOKIE_ACCESS_TOKEN_KEY } from '@/constants/key';

import { getCookie } from '@/utils/cookie';

import { httpClient } from './http/httpClient';

/* Client Side APIs */

// Login for existing user
export const postUserLogin = ({
  payload,
  options = {},
}: {
  payload: UserLoginPayload;
  options?: RequestInit;
}): Promise<UserResponse> => {
  return httpClient
    .post('/users/login', {
      ...options,
      body: JSON.stringify(payload),
    })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// Register a new user
export const postUserRegister = ({
  payload,
  options = {},
}: {
  payload: UserRegisterPayload;
  options?: RequestInit;
}): Promise<UserResponse> => {
  return httpClient
    .post('/users', {
      ...options,
      body: JSON.stringify(payload),
    })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// Updated user information for current user
export const putCurrentUser = ({
  payload,
  headers = {},
  options = {},
}: {
  payload: CurrentUserPayload;
  headers?: HeadersInit;
  options?: RequestInit;
}): Promise<UserResponse | string> => {
  const accessToken = getCookie(COOKIE_ACCESS_TOKEN_KEY);

  return httpClient
    .put('/user', {
      ...options,
      headers: {
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
export const getCurrentUser = ({
  headers = {},
  options = {},
}: {
  headers?: HeadersInit;
  options?: RequestInit;
}): Promise<UserResponse | void> => {
  return httpClient
    .get('/user', {
      ...options,
      headers,
    })
    .then((res) => res.json())
    .then((res: UserResponse) => {
      if (res?.status === 'error') {
        throw new Error(ERROR.CURRENT_USER);
      }
      return res;
    })
    .catch((err) => console.error(err));
};

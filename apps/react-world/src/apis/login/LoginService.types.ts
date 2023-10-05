// LoginService.types.ts

import type CurrentUser from '@/app-types/CurrentUser';

export interface LoginUserParams {
  email: string;
  password: string;
}

export interface LoginUserErrors {
  [key: string]: string[];
}

export interface LoginUserResponse {
  user: CurrentUser & { jwtToken: string };
}

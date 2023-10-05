import type CurrentUser from '@/app-types/CurrentUser';

export interface RegisterUserParams {
  username: string;
  email: string;
  password: string;
}

export interface RegisterUserErrors {
  [key: string]: string[];
}

export interface RegisterUserResponse {
  user: CurrentUser;
}

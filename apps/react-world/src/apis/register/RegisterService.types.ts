export interface RegisterUserParams {
  username: string;
  email: string;
  password: string;
}

export interface RegisterUserErrors {
  [key: string]: string[];
}

export interface RegisteredUserResponse {
  email: string;
  token: string;
  username: string;
  bio: string | null;
  image: string | null;
}

export interface RegisterUserResponse {
  user: RegisteredUserResponse;
}

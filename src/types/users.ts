export interface RegisterUserInput {
  username: string;
  email: string;
  password: string;
}

export type RegisterUserResponse = RegisterUserSuccessResponse | RegisterUserFailResponse;

interface RegisterUserSuccessResponse {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
  };
}

export interface RegisterUserFailResponse {
  errors: {
    "email or password": string[];
  };
}

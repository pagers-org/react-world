export interface RegisterUserInput {
  username: string;
  email: string;
  password: string;
}

export interface RegisterUserResponse {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
  };
}

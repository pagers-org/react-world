export type User = {
  email: string;
  token?: string;
  username: string;
  bio: string;
  image: string;
  password?: string;
};

export type LoginUser = Pick<User, 'email' | 'password'>;

export type NewUser = Pick<User, 'email' | 'username' | 'password'>;

export type UpdateUser = Omit<User, 'token'>;

export type UserResponse = {
  user: Omit<User, 'password'>;
};

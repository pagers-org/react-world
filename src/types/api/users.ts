export type UserLoginPayload = {
  user: {
    email: string;
    password: string;
  };
};

export type UserRegisterPayload = {
  user: {
    username: string;
    email: string;
    password: string;
  };
  errors?: unknown;
};

export type CurrentUserPayload = {
  user: {
    email: string;
    password?: string;
    username: string;
    bio: string | null;
    image: string;
  };
};

export type UserResponse = {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string | null;
    image: string;
  };
  errors?: unknown;
};

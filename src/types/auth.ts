interface LoginPostRequestType {
  user: {
    email: string;
    password: string;
  };
}

interface RegisterPostRequestType {
  user: {
    username: string;
    email: string;
    password: string;
  };
}

interface UpdateUserType {
  user: {
    email: string;
    password: string;
    username: string;
    bio: string;
    image: string;
  };
}

interface UserType {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
  };
}

export type {
  LoginPostRequestType,
  RegisterPostRequestType,
  UpdateUserType,
  UserType,
};

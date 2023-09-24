type LoginPostRequestType = {
  user: {
    email: string;
    password: string;
  };
};

type RegisterPostRequestType = {
  user: {
    username: string;
    email: string;
    password: string;
  };
};

type UpdateUserType = {
  user: {
    email: string;
    password: string;
    username: string;
    bio: string;
    image: string;
  };
};

type UserType = {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
  };
};

export type {
  LoginPostRequestType,
  RegisterPostRequestType,
  UpdateUserType,
  UserType,
};

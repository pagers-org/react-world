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

type UpdatePutRequestType = {
  user: {
    email: string;
    password: string;
    username: string;
    bio: string;
    image: string;
  };
};

type UsersResponseType = {
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
  UpdatePutRequestType,
  UsersResponseType,
};

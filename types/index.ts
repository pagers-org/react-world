import { ReactNode } from 'react';

export type Button = {
  size: string;
  onClick: () => void;
  children: ReactNode;
};

export type Input = {
  size: string;
  placeholder: string;
};

export type User = {
  userName: string;
  email: string;
  password: string;
};

export type UserAction = {
  login: () => void;
  updateUser: () => void;
  logout: () => void;
  reset: () => void;
};

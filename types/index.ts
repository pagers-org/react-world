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

export type Article = {
  title: string;
  description: string;
  body: string;
  tagList: string[];
};

export type User = {
  userName: string;
  email: string;
  password: string;
  token: string;
  bio: string;
  image: string;
};

export type UserAction = {
  login: (e: any) => void;
  updateUser: () => void;
  logout: () => void;
  reset: () => void;
};

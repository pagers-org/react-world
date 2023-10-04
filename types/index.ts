import { ReactNode } from 'react';

export type Button = {
  size?: string;
  onClick: () => void;
  children: ReactNode;
  type: string;
};

export type Input = {
  size: string;
  placeholder: string;
};

export type LoginUser = {
  email: string;
  password: string;
};

export type NewUser = {
  username: string;
  email: string;
  password: string;
};

export type UpdateUser = {
  email: string;
  password: string;
  username: string;
  bio: string;
  image: string;
};

export type Profile = {
  usename: string;
  bio: string;
  image: string;
  following: boolean;
};

export type Article = {
  slug?: string;
  title: string;
  description?: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updateAt?: string;
  favorited?: boolean;
  favoritesCount: number;
  author: Profile;
};

export type NewArticle = {
  title: string;
  description: string;
  body: string;
  tagList: string[];
};

export type UpdateArticle = {
  title: string;
  description: string;
  body: string;
};

export type Comment = {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: Profile;
};

export type User = {
  email: string;
  token?: string;
  username: string;
  bio: string;
  image: string;
  password?: string;
};

export type UserAction = {
  login?: (user: User) => void;
  updateUser?: (user: User) => void;
  logout?: () => void;
  reset?: () => void;
};

export type UserResponse = {
  user: User;
};

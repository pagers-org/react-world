import { UserResponse } from '@/types/api/users';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { ACCESS_TOKEN_KEY } from '@/constants/key';

export type UserStoreState = {
  user: Omit<UserResponse['user'], 'token'>;
  login: (user: UserResponse['user']) => void;
  logout: () => void;
  updateInfo: (user: UserResponse['user']) => void;
};

const INITIAL_USER = {
  email: '',
  username: '',
  bio: null,
  image: '',
};

export const useUserStore = create(
  persist<UserStoreState>(
    (set) => ({
      user: INITIAL_USER,
      login: (user) =>
        set(() => {
          const { email, username, bio, image, token } = user;
          localStorage.setItem(ACCESS_TOKEN_KEY, token);
          window.location.href = '/';
          return {
            user: {
              email,
              username,
              bio,
              image,
            },
          };
        }),
      logout: () =>
        set(() => {
          localStorage.removeItem(ACCESS_TOKEN_KEY);
          window.location.href = '/';
          return {
            user: INITIAL_USER,
          };
        }),
      updateInfo: (user) =>
        set(() => {
          const { email, username, bio, image, token } = user;
          localStorage.setItem(ACCESS_TOKEN_KEY, token);
          return {
            user: {
              email,
              username,
              bio,
              image,
            },
          };
        }),
    }),
    {
      name: 'user-storage',
    },
  ),
);

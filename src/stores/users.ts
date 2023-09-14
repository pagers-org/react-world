import { UserResponse } from '@/types/api/users';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { COOKIE_ACCESS_TOKEN_KEY } from '@/constants/key';
import { COOKIE_ACCESS_TOKEN_MAX_AGE } from '@/constants/time';

import { setCookie } from '@/utils/cookie';

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
          setCookie(
            COOKIE_ACCESS_TOKEN_KEY,
            token,
            COOKIE_ACCESS_TOKEN_MAX_AGE,
          );
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
          setCookie(COOKIE_ACCESS_TOKEN_KEY, '', 0);
          return {
            user: INITIAL_USER,
          };
        }),
      updateInfo: (user) =>
        set(() => {
          const { email, username, bio, image, token } = user;
          setCookie(
            COOKIE_ACCESS_TOKEN_KEY,
            token,
            COOKIE_ACCESS_TOKEN_MAX_AGE,
          );
          window.location.href = `/profile/${username}`;
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

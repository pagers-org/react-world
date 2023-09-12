import { User, UserAction } from '@/types';
import { setCookie } from '@/utils/cookies';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState: User = {
  username: '',
  email: '',
  token: '',
  bio: '',
  image: '',
};

const useUserStore = create(
  persist<User | UserAction>(
    set => ({
      ...initialState,
      login: user => {
        set(() => {
          const { email, username, bio, image, token } = user;
          setCookie('token', token, 0);
          return {
            email,
            username,
            bio,
            image,
          };
        });
      },
      logout: () => {
        set(() => {
          setCookie('token', '', 0);
          return {
            ...initialState,
          };
        });
      },
    }),
    {
      name: 'user-storage',
    }
  )
);

export default useUserStore;

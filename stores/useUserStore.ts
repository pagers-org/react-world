import { User, UserAction } from '@/types';
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
          return {
            ...initialState,
          };
        });
      },
      updateUser: (user: User) => {
        set(() => {
          return {
            ...user,
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

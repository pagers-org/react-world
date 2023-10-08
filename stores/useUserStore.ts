import { User } from '@/types/api/users';
import { UserAction } from '@/types/store/userStore';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState: User = {
  username: '',
  email: '',
  bio: '',
  image: '',
  password: '',
};

const useUserStore = create(
  persist<User | UserAction>(
    set => ({
      ...initialState,
      saveUserInfo: user => {
        set(() => {
          const { email, username, bio, image } = user;

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

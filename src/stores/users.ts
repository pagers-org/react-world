import { UserResponse } from '@/types/api/users';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Store = {
  user: Omit<UserResponse['user'], 'token'>;
  setUser: (user: Omit<UserResponse['user'], 'token'>) => void;
};

export const useUserStore = create(
  persist<Store>(
    (set) => ({
      user: {
        email: '',
        username: '',
        bio: null,
        image: '',
      },
      setUser: (user) => set({ user: { ...user } }),
    }),
    {
      name: 'user-storage',
    },
  ),
);

import { User, UserAction } from '@/types';
import { create } from 'zustand';

const initialState: User = {
  userName: '',
  email: '',
  password: '',
};

const useUserStore = create<User | UserAction>(set => ({
  ...initialState,
  login: () => set(state => ({})),
  reset: () => set(initialState),
}));

export default useUserStore;

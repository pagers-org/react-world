import { http } from '@/libs/http';
import { User, UserAction } from '@/types';
import { create } from 'zustand';

const initialState: User = {
  userName: '',
  email: '',
  password: '',
  token: '',
  bio: '',
  image: '',
};

const useUserStore = create<User | UserAction>(set => ({
  ...initialState,
  login: async (e: any) => {
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const { user } = await http.post('https://api.realworld.io/api/users/login', { user: { email, password } });
      console.log(user);
      set(state => ({ ...state, ...user }));
    } catch (err) {
      console.log(err);
    }
  },
  reset: () => set(initialState),
}));

export default useUserStore;

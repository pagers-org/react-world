import { http } from '@/libs/http';
import { User, UserAction } from '@/types';
import { create } from 'zustand';

const initialState: User = {
  username: '',
  email: '',
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
      console.log(email);

      const res = await http.post('http://localhost:3000/api/auth', { user: { email, password } });

      console.log(res);

      // set(state => ({ ...state, ...user }));
    } catch (err) {
      console.log(err);
    }
  },
  reset: () => set(initialState),
}));

export default useUserStore;

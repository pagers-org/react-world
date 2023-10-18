import { User } from '../api/users';

export type UserAction = {
  saveUserInfo: (user: User) => void;
  updateUser: (user: User) => void;
  logout: () => void;
};

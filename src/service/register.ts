import { API_BASE_URL } from '@/utils';

import { UserResponse } from './login';

export interface RegisterInfo {
  user: {
    username: string;
    email: string;
    password: string;
  };
}

export const postRegister = async (
  registerInfo: RegisterInfo,
): Promise<UserResponse> =>
  fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(registerInfo),
  }).then((res) => res.json());

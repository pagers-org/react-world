'use client';

import { atom } from 'jotai';
import { ReactNode, createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  auth: '',
  setAuth: (value: string) => {},
});

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [auth, setAuth] = useState('');

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthProvider 내부에서만 사용이 가능합니다.');
  }

  return authContext;
}

export const authAtom = atom('');

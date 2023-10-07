import { LoginUser, NewUser } from '@/types';
import { useMutation } from '@tanstack/react-query';
// 로그인 / 로그아웃 / 회원가입 / 로그인 확인
const useAuth = ({
  loginSuccess,
  loginError,
  signupSuccess,
  signupError,
  signoutSuccess,
  signoutError,
}: {
  loginSuccess?: (res: any) => void;
  loginError?: (err: any) => void;
  signupSuccess?: (res: any) => void;
  signupError?: (err: any) => void;
  signoutSuccess?: (res: any) => void;
  signoutError?: (err: any) => void;
}) => {
  // 로그인
  const { mutate: login } = useMutation({
    mutationFn: async (loginUser: LoginUser) =>
      await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify({ ...loginUser }) }).then(res =>
        res.json()
      ),
    onSuccess: loginSuccess,
    onError: loginError,
  });

  // 회원가입
  const { mutate: signup } = useMutation({
    mutationFn: async (newUser: NewUser) =>
      await fetch('/api/auth/signup', { method: 'POST', body: JSON.stringify({ ...newUser }) }).then(res => res.json()),
    onSuccess: signupSuccess,
    onError: signupError,
  });

  // 로그아웃
  const { mutate: signOut } = useMutation({
    mutationFn: () => fetch('/api/auth/logout').then(res => res.json()),
    onSuccess: signoutSuccess,
    onError: signoutError,
  });

  return { login, signup, signOut };
};

export default useAuth;

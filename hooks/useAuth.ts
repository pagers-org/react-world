import { LoginUser, NewUser, UserResponse } from '@/types/api/users';
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
  loginSuccess?: (res: UserResponse) => void;
  loginError?: (err: Error) => void;
  signupSuccess?: (res: UserResponse) => void;
  signupError?: (err: Error) => void;
  signoutSuccess?: (res: UserResponse) => void;
  signoutError?: (err: Error) => void;
}) => {
  // 그냥 onSuccess랑 onError로 다 해결할까? login, signup, signout을 같은 컴포넌트에서
  // 사용할 일이 있을까?

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
    mutationFn: async () => await fetch('/api/auth/logout').then(res => res.json()),
    onSuccess: signoutSuccess,
    onError: signoutError,
  });

  return { login, signup, signOut };
};

export default useAuth;

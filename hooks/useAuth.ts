import { LoginUser, NewUser } from '@/types';
import { useMutation } from '@tanstack/react-query';
// 로그인 로그아웃 회원가입 로그인 확인
const useAuth = () => {
  // 로그인
  const { mutate: login } = useMutation({
    mutationFn: async (loginUser: LoginUser) =>
      await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify({ ...loginUser }) }).then(res =>
        res.json()
      ),
    onSuccess: () => {
      alert('로그인 성공!');
    },
    onError: (err: any) => {
      console.log(err);
      alert('에러 발생');
    },
  });

  // 회원가입
  const { mutate: signup } = useMutation({
    mutationFn: async (newUser: NewUser) =>
      await fetch('/api/auth/signup', { method: 'POST', body: JSON.stringify({ ...newUser }) }).then(res => res.json()),
    onSuccess: () => {
      alert('회원가입 성공!');
    },
    onError: (err: any) => {
      console.log(err);
      alert('에러 발생');
    },
  });

  // 로그아웃
  const { mutate: signOut } = useMutation({
    mutationFn: () => fetch('/api/auth/logout').then(res => res.json()),
    onSuccess: () => {
      alert('로그아웃 성공!');
    },
    onError: (err: any) => {
      console.log(err);
      alert('에러 발생');
    },
  });

  return { login, signup, signOut };
};

export default useAuth;

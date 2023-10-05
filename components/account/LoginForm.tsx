'use client';
import useLogin from '@/hooks/useLogin';
import useUserStore from '@/stores/useUserStore';
import { form } from '@/styles/account.css';
import { fillGreenButton, input } from '@/styles/common.css';
import { buttonBox } from '@/styles/layout.css';
import { LoginUser, UserAction } from '@/types';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

const LoginForm = () => {
  const router = useRouter();
  const { login } = useUserStore() as UserAction;

  const [loginUser, setLoginUser] = useState<LoginUser>({
    email: '',
    password: '',
  });

  const onSuccess = (res: any) => {
    login({ ...res.user });
    router.push('/');
  };

  const onError = (err: any) => {
    console.log(err.message);
    alert('이메일 또는 비밀번호가 잘못되었습니다.');
  };

  const { mutate, isLoading } = useLogin({ onSuccess, onError });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      ...loginUser,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginUser(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={form}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className={input}
        onChange={handleChange}
        value={loginUser.email}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className={input}
        onChange={handleChange}
        value={loginUser.password}
        required
      />
      <div className={buttonBox}>
        <input type="submit" value={'Sign in'} className={fillGreenButton} disabled={isLoading} />
      </div>
    </form>
  );
};

export default LoginForm;

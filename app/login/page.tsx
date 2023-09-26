'use client';

import useUserStore from '@/stores/useUserStore';
import { form, question, title } from '@/styles/account.css';
import { input, container, flexCenter, flexRow, fillGreenButton } from '@/styles/common.css';
import { buttonBox } from '@/styles/layout.css';
import { LoginUser } from '@/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

const LoginPage = () => {
  const router = useRouter();
  const { login } = useUserStore();

  const [formData, setFormData] = useState<LoginUser>({
    email: '',
    password: '',
  });

  const { data: userData, refetch } = useQuery({
    queryKey: ['user-data'],
    queryFn: () => fetch('/api/user').then(res => res.json()),
    enabled: false,
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: (formData: any) =>
      fetch('/api/auth/login', { method: 'POST', body: JSON.stringify({ ...formData }) }).then(res => res.json()),
    onError: error => {
      setFormData({
        email: '',
        password: '',
      });
      alert('아이디 또는 비밀번호가 잘못되었습니다.');
    },
    onSuccess: res => {
      console.log(res);
      login({ ...res.user });
      router.push('/');
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      ...formData,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <section className={`${container} ${flexRow} ${flexCenter}`}>
      <div className={title}>Sign in</div>
      <div className={question}>Need an account?</div>
      <form onSubmit={handleSubmit} className={form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={input}
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={input}
          onChange={handleChange}
          value={formData.password}
          required
        />
        <div className={buttonBox}>
          <input type="submit" value={'Sign in'} className={fillGreenButton} disabled={isLoading} />
        </div>
      </form>
    </section>
  );
};

export default LoginPage;

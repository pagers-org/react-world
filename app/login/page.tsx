'use client';

import { login } from '@/services/users';
import { form, question, title } from '@/styles/account.css';
import { input, container, flexCenter, flexRow, fillGreenButton } from '@/styles/common.css';
import { buttonBox } from '@/styles/layout.css';
import { LoginUser } from '@/types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

const LoginPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<LoginUser>({
    email: '',
    password: '',
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: login,
    onError: error => {
      console.log(error);
    },
    onSuccess: () => {
      router.push('/');
    },
  });

  const handleSubmit = (e: any) => {
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

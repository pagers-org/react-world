'use client';
import { registerUserAPI } from '@/services/users';
import useUserStore from '@/stores/useUserStore';
import { form, question, title } from '@/styles/account.css';
import { input, container, flexRow, flexCenter, fillGreenButton } from '@/styles/common.css';
import { buttonBox } from '@/styles/layout.css';
import { NewUser } from '@/types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { ChangeEvent, FormEvent, useState } from 'react';

const RegisterPage = () => {
  const router = useRouter();
  const { login } = useUserStore();
  const [formData, setFormData] = useState<NewUser>({
    username: '',
    email: '',
    password: '',
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: registerUserAPI,
    onError: error => {
      alert('회원가입에 실패했습니다.');
      console.log(error);
    },
    onSuccess: res => {
      alert('회원가입에 성공했습니다.');
      login({
        ...res.user,
      });
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
      <div className={title}>Sign up</div>
      <div className={question}>Have an account?</div>
      <form onSubmit={handleSubmit} className={form}>
        <input
          type="text"
          name="username"
          className={input}
          placeholder="Username"
          onChange={handleChange}
          value={formData.username}
          required
        />
        <input
          type="email"
          name="email"
          className={input}
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          type="password"
          name="password"
          className={input}
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <div className={buttonBox}>
          <input type="submit" className={fillGreenButton} value="Sign up" disabled={isLoading} />
        </div>
      </form>
    </section>
  );
};

export default RegisterPage;

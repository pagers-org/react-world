'use client';

import Button from '@/components/Button';
import { FormTitle } from '@/components/FormTitle';
import Input from '@/components/Input';
import { ROUTE } from '@/constants/route';
import { postLogin } from '@/service/login';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';
import { useCookies } from 'react-cookie';

import * as styles from './page.css';

interface Props {
  email: string;
  password: string;
}
export default function LoginPage() {
  const router = useRouter();
  const [, setCookie] = useCookies(['token']);
  const [form, setForm] = useState<Props>({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginInfo = { user: { email: form.email, password: form.password } };
    const data = await postLogin(loginInfo);

    setCookie('token', data.user.token, {
      path: '/',
      secure: true,
    });
    router?.push(ROUTE.HOME);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.loginContainer}>
      <FormTitle title="Sign In" subTitle="Need an account?" href={ROUTE.SIGNUP}/>
      <form className={styles.formType} onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          value={form.email}
          handleEvent={handleChange}
        />
        <Input
          type="password"
          name="password"
          value={form.password}
          handleEvent={handleChange}
        />
        <Button className={styles.submitButton} content="Sign in " />
      </form>
    </div>
  );
}

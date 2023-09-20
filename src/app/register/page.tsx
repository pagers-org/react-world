'use client';

import Button from '@/components/Button';
import { FormTitle } from '@/components/FormTitle';
import Input from '@/components/Input';
import { postRegister } from '@/service/register';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';

import * as styles from './page.css';
import { ROUTE } from '@/constants/route';

interface Props {
  email: string;
  password: string;
  username: string;
}

export default function LoginPage() {
  const [form, setForm] = useState<Props>({
    email: '',
    password: '',
    username: '',
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, email, password } = form;
    const loginInfo = {
      user: {
        username,
        email,
        password,
      },
    };
    await postRegister(loginInfo);
    router.push(ROUTE.HOME);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.loginContainer}>
      <FormTitle title="Sign Up" subTitle="Have an account?" href={ROUTE.SIGNIN} />
      <form className={styles.formType} onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          value={form.username}
          handleEvent={handleChange}
        />
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
        <Button className={styles.submitButton} content="Sign up" />
      </form>
    </div>
  );
}

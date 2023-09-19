'use client';

import { postLogin } from '@/service/login';
import React, { ChangeEvent, useState } from 'react';

import * as styles from './page.css';
import { useCookies } from 'react-cookie';


export default function LoginPage() {
  const [,setCookie] = useCookies(['token']);

  const [form, setForm] = useState<{ email: string; password: string }>({
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
      httpOnly: true
    })
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.loginContainer}>
      <p className={styles.title}>Sign in</p>
      <p className={styles.subTitle}>Need an account?</p>
      <form className={styles.formType} onSubmit={handleSubmit}>
        <input
          className={styles.inputType}
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className={styles.inputType}
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <button className={styles.submitButton} type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}

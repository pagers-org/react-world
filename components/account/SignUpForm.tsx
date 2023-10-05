'use client';

import useAuth from '@/hooks/useAuth';
import useUserStore from '@/stores/useUserStore';
import { form } from '@/styles/account.css';
import { fillGreenButton, input } from '@/styles/common.css';
import { buttonBox } from '@/styles/layout.css';
import { NewUser, UserAction } from '@/types';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

const SignUpForm = () => {
  const router = useRouter();
  const { login } = useUserStore() as UserAction;
  const [newUser, setNewUser] = useState<NewUser>({
    username: '',
    email: '',
    password: '',
  });

  const { signup } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signup({
      ...newUser,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={form}>
      <input
        type="text"
        name="username"
        className={input}
        placeholder="Username"
        onChange={handleChange}
        value={newUser.username}
        required
      />
      <input
        type="email"
        name="email"
        className={input}
        placeholder="Email"
        onChange={handleChange}
        value={newUser.email}
        required
      />
      <input
        type="password"
        name="password"
        className={input}
        placeholder="Password"
        onChange={handleChange}
        value={newUser.password}
        required
      />
      <div className={buttonBox}>
        <input type="submit" className={fillGreenButton} value="Sign up" disabled={false} />
      </div>
    </form>
  );
};

export default SignUpForm;

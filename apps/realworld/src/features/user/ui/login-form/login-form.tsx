'use client';

import { getGetUserQueryKey } from '@/entities/user/api/useGetUser';
import { useLogin } from '@/shared/api/realworld/endpoints/user-and-authentication/user-and-authentication';
import { PathBuilder } from '@/shared/utils/routes';
import webStorage, { StorageKey } from '@/shared/utils/webStorage';
import { Button, Input } from '@packages/ui';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { push } = useRouter();
  const queryClient = useQueryClient();

  const {
    mutateAsync: login,
    error: loginError,
    isLoading: loginLoading,
  } = useLogin({
    mutation: {
      onSuccess: async data => {
        webStorage.setItem(StorageKey.userToken, data.user.token);
        await queryClient.invalidateQueries(getGetUserQueryKey());
        push(PathBuilder.buildHome().getPath());
      },
    },
  });

  const handleChangeEmail = (_: React.ChangeEvent<HTMLInputElement>, email: string) => {
    setEmail(email);
  };

  const handleChangePassword = (_: React.ChangeEvent<HTMLInputElement>, password: string) => {
    setPassword(password);
  };

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ data: { user: { email, password } } });
  };

  const buttonDisabled = loginLoading;

  return (
    <div className="flex flex-col gap-16">
      {Boolean(loginError) && <p className="ml-16 font-bold text-red600"> • email or password is invalid</p>}

      <form onSubmit={handleSubmitLogin} className="flex flex-col gap-16">
        <fieldset className="form-group">
          <Input required value={email} size="lg" placeholder="Email" onChange={handleChangeEmail} type="email" />
        </fieldset>
        <fieldset className="form-group">
          <Input
            required
            value={password}
            size="lg"
            type="password"
            placeholder="Password"
            onChange={handleChangePassword}
          />
        </fieldset>
        <Button className="ml-auto" type="submit" variant="fill" color="primary" size="lg" disabled={buttonDisabled}>
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;

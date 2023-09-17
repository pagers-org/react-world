'use client';
import { useCreateUser } from '@/shared/api/realworld/endpoints/user-and-authentication/user-and-authentication';
import { Button, Input } from '@packages/ui';
import React, { useState } from 'react';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { mutateAsync: createUser, error: createUserError, isLoading: createUserLoading } = useCreateUser();

  const handleChangeUsername = (_: React.ChangeEvent<HTMLInputElement>, username: string) => {
    setUsername(username);
  };

  const handleChangeEmail = (_: React.ChangeEvent<HTMLInputElement>, email: string) => {
    setEmail(email);
  };

  const handleChangePassword = (_: React.ChangeEvent<HTMLInputElement>, password: string) => {
    setPassword(password);
  };

  const handleSubmitCreateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser({ data: { user: { email, password, username } } });
  };

  const buttonDisabled = createUserLoading;

  return (
    <div className="flex flex-col gap-16">
      {Boolean(createUserError) && <p className="ml-16 font-bold text-red600"> • That email is already taken</p>}

      <form className="flex flex-col gap-16" onSubmit={handleSubmitCreateUser}>
        <fieldset className="form-group">
          <Input
            required
            value={username}
            size="lg"
            placeholder="Username"
            onChange={handleChangeUsername}
            type="text"
          />
        </fieldset>
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
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;

import { LoginForm } from '@/features/user';
import { PathBuilder } from '@/shared/utils/routes';
import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col gap-16 w-540">
        <div className="flex flex-col gap-8">
          <h1 className="text-[2.5rem] text-center">Sign in</h1>
          <p className="text-center text-green600">
            <a href={PathBuilder.buildRegister().getPath()}>Need an account?</a>
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

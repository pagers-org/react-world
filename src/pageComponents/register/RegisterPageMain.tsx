'use client';

import { useUserStore } from '@/stores/users';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';

import { postUserRegister } from '@/api/users';

const RegisterPageMain = () => {
  const login = useUserStore((state) => state.login);

  const [form, setForm] = useState<{
    username: string;
    email: string;
    password: string;
  }>({
    username: '',
    email: '',
    password: '',
  });
  const [errorTypes, setErrorTypes] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    setErrorTypes(null);

    postUserRegister({
      user: {
        ...form,
      },
    }).then((res) => {
      if (res?.errors) {
        const errorTypes = Object.keys(res.errors);
        setErrorTypes(errorTypes);
      } else {
        const user = res.user;
        login(user);
      }
      setIsLoading(false);
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link href="/login">Have an account?</Link>
            </p>

            {errorTypes && (
              <ul className="error-messages">
                {errorTypes.map((errorType) => (
                  <li key={errorType}>
                    {`That ${errorType} is already taken`}
                  </li>
                ))}
              </ul>
            )}

            <form onSubmit={handleSubmit}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </fieldset>
              <button
                type="submit"
                className="btn btn-lg btn-primary pull-xs-right"
                disabled={isLoading}
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPageMain;

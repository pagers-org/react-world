'use client';

import { useUserStore } from '@/stores/users';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

import { postUserLogin } from '@/api/users';

const LoginPageMain = () => {
  const router = useRouter();
  const login = useUserStore((state) => state.login);

  const [form, setForm] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    postUserLogin({
      user: {
        ...form,
      },
    }).then((res) => {
      if (res?.errors) {
        alert('올바른 이메일과 비밀번호를 입력해주세요!');
      } else {
        const user = res.user;
        login(user);
        router.push('/');
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
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link href="/register">Need an account?</Link>
            </p>

            <form onSubmit={handleSubmit}>
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
                className="btn btn-lg btn-primary pull-xs-right"
                type="submit"
                disabled={isLoading}
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageMain;

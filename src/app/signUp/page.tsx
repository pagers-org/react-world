'use client';

import { RegisterPostRequestType } from '@/types/auth';
import { produce } from 'immer';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

import { postUserRegister } from '@/api/auth';

const page = () => {
  const router = useRouter();

  const [formInput, setFormInput] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState<null | string>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userInfo: RegisterPostRequestType = {
      user: {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      },
    };
    signOutUser(userInfo);
  };

  const signOutUser = async (userInfo: RegisterPostRequestType) => {
    await postUserRegister(userInfo).then((res) => {
      if (res.errors) {
        console.log(Object.keys(res.errors));
        console.log(Object.values(res.errors));
        const errorText = `${Object.keys(res.errors)} ${
          Object.values(res.errors)[0]
        }`;
        setError(errorText);
      } else {
        router.push('/login');
      }
    });
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <a href="/login">Have an account?</a>
            </p>

            {error && (
              <ul className="error-messages">
                <li>{error}</li>
              </ul>
            )}

            <form onSubmit={handleSubmit}>
              <fieldset className="form-group">
                <input
                  value={formInput.username}
                  onChange={(e) =>
                    setFormInput(
                      produce((input) => {
                        input.username = e.target.value;
                      }),
                    )
                  }
                  name="username"
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Username"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  value={formInput.email}
                  onChange={(e) =>
                    setFormInput(
                      produce((input) => {
                        input.email = e.target.value;
                      }),
                    )
                  }
                  name="email"
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  value={formInput.password}
                  onChange={(e) =>
                    setFormInput(
                      produce((input) => {
                        input.password = e.target.value;
                      }),
                    )
                  }
                  name="password"
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <button
                disabled={
                  formInput.email.length === 0 ||
                  formInput.username.length === 0 ||
                  formInput.password.length === 0
                }
                className="btn btn-lg btn-primary pull-xs-right"
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

export default page;

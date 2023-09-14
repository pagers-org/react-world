'use client';

import { LoginPostRequestType } from '@/types/auth';
import { produce } from 'immer';
import { useRouter } from 'next/navigation';
import  { FormEvent, useState } from 'react';

import { postUserLogin } from '@/api/auth';

const page = () => {
  const router = useRouter();

  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
  });
  const [isLoading,setIsLoading] = useState(false)

  const [error, setError] = useState<null | string>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const EventTarget = e.target;
    const userInfo: LoginPostRequestType = {
      user: {
        email: EventTarget.email.value,
        password: EventTarget.password.value,
      },
    };
    login(userInfo);
  };

  const login = async (userInfo: LoginPostRequestType) => {

    await postUserLogin(userInfo).then((res) => {
      if (res.errors) {
        setIsLoading(false);
        const errorText = `${Object.keys(res.errors)} ${
          Object.values(res.errors)[0]
        }`;
        setError(errorText);
      } else {
        router.push('/');
      }
    });
  };

  return (
    <div>
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign in</h1>
              <p className="text-xs-center">
                <a href="/signUp">Need an account?</a>
              </p>

              {error && (
                <ul className="error-messages">
                  <li>{error}</li>
                </ul>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
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
                </div>
                <div className="form-group">
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
                </div>
                <button
                type='submit'
                  disabled={
                    formInput.email.length === 0 ||
                    formInput.password.length === 0
                  }
                  className="btn btn-lg btn-primary pull-xs-right"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

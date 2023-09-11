'use client';

import { useUserStore } from '@/stores/users';
import { CurrentUserPayload, UserResponse } from '@/types/api/users';
import { ChangeEvent, FormEvent, useState } from 'react';

import { putCurrentUser } from '@/api/users';

interface Props {
  mySettings: UserResponse['user'];
}

const SettingsPageMain = ({ mySettings }: Props) => {
  const { logout, updateInfo } = useUserStore();

  const [form, setForm] = useState<CurrentUserPayload['user']>({
    ...mySettings,
    password: '',
  });
  const [errorTypes, setErrorTypes] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCurrentValidState = (currentForm: CurrentUserPayload['user']) => {
    const { email, username, image } = currentForm;

    return {
      email: !!email || false,
      username: !!username || false,
      image: !!image || false,
    };
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    setErrorTypes(null);

    const { email, password, username, bio, image } = form;

    const currentValidState = getCurrentValidState(form);

    const errorTypes = Object.entries(currentValidState)
      .filter(([_, value]) => !value)
      .map((state) => state[0]);

    if (errorTypes.length > 0) {
      setErrorTypes(errorTypes);
      setIsLoading(false);
      return;
    }

    const payload = password
      ? {
          email,
          password,
          username,
          bio,
          image,
        }
      : {
          email,
          username,
          bio,
          image,
        };

    putCurrentUser({
      user: payload,
    }).then((res) => {
      if (!res?.errors) {
        const user = res.user;
        updateInfo(user);
      }
      setIsLoading(false);
    });
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            {errorTypes && (
              <ul className="error-messages">
                {errorTypes.map((errorType) => (
                  <li key={errorType}>{`That ${errorType} is required`}</li>
                ))}
              </ul>
            )}

            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="URL of profile picture"
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Your Name"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    rows={8}
                    placeholder="Short bio about you"
                    name="bio"
                    value={form?.bio ?? ''}
                    onChange={handleChange}
                    disabled={isLoading}
                  ></textarea>
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
                    placeholder="New Password"
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
                  Update Settings
                </button>
              </fieldset>
            </form>
            <hr />
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={logout}
            >
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPageMain;

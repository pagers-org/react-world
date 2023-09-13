'use client';

import { useUserStore } from '@/stores/users';
import { CurrentUserPayload, UserResponse } from '@/types/api/users';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

import { putCurrentUser } from '@/api/users';

interface Props {
  mySettings: UserResponse['user'];
}

const SettingsPageMain = ({ mySettings }: Props) => {
  const router = useRouter();
  const { logout, updateInfo } = useUserStore();

  const [form, setForm] = useState<CurrentUserPayload['user']>({
    ...mySettings,
    password: '',
  });
  const [errorEmptyTypes, setErrorEmptyTypes] = useState<string[] | null>(null);
  const [errorValidTypes, setErrorValidTypes] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCurrentFormValidState = (
    currentForm: CurrentUserPayload['user'],
  ) => {
    const { email, username, image } = currentForm;

    return {
      email: !!email,
      username: !!username,
      image: !!image,
    };
  };

  const checkCurrentFormValid = (currentForm: CurrentUserPayload['user']) => {
    const currentValidState = getCurrentFormValidState(currentForm);

    const errorTypes = Object.entries(currentValidState)
      .filter(([_, value]) => !value)
      .map((state) => state[0]);

    if (errorTypes.length > 0) {
      setErrorEmptyTypes(errorTypes);
      setIsLoading(false);
      return;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    setErrorEmptyTypes(null);

    const { email, password, username, bio, image } = form;

    checkCurrentFormValid(form);

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
      if (typeof res === 'string') {
        if (res.match(/email/)) {
          setErrorValidTypes((prev) => [...(prev ?? []), 'email']);
        }
        if (res.match(/username/)) {
          setErrorValidTypes((prev) => [...(prev ?? []), 'username']);
        }
        setIsLoading(false);
        return;
      }

      const user = res.user;
      updateInfo(user);
      setIsLoading(false);
    });
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            {errorEmptyTypes && (
              <ul className="error-messages">
                {errorEmptyTypes.map((errorEmptyType) => (
                  <li
                    key={errorEmptyType}
                  >{`That ${errorEmptyType} is required.`}</li>
                ))}
              </ul>
            )}

            {errorValidTypes && (
              <ul className="error-messages">
                {errorValidTypes.map((errorValidType) => (
                  <li
                    key={errorValidType}
                  >{`That ${errorValidType} is already exists.`}</li>
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
              onClick={handleLogout}
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

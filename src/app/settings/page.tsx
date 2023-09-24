'use client';

import { UpdateUserType } from '@/types/auth';
import { produce } from 'immer';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useEffect, useState } from 'react';

import { User } from '@/constants/localStorageKey';

import { updateUser } from '@/api/auth';

import { LocalStorage, ParseGetLocalStorage } from '@/utils/browserStorage';

const page = () => {
  const router = useRouter();

  const handleClickLogout = () => {
    LocalStorage.remove(User);
    router.push('/');
  };

  const [formInput, setFormInput] = useState({
    profilePictureUrl: '',
    username: '',
    bio: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<null | string>();

  const { profilePictureUrl, username, bio, email, password } = formInput;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const articleInfo: UpdateUserType = {
      user: {
        email,
        password,
        username,
        bio,
        image: profilePictureUrl,
      },
    };
    submitArticle(articleInfo);
  };

  const previousUserInfo = JSON.parse(LocalStorage.get(User));

  const submitArticle = async (userInfo: UpdateUserType) => {
    await updateUser(userInfo).then((res) => {
      if (res.errors) {
        setIsLoading(false);
        const errorText = `${Object.keys(res.errors)} ${
          Object.values(res.errors)[0]
        }`;
        setError(errorText);
      } else {
        router.push(`/${username}`);
      }
    });
  };

  useEffect(() => {
    console.log(previousUserInfo);
    if (previousUserInfo) {
      setFormInput(
        produce((input) => {
          const { email, password, username, image } = previousUserInfo;
          input.email = email;
          input.username = username;
          input.profilePictureUrl = image;
        }),
      );
    }
  }, [previousUserInfo]);

  console.log(formInput);

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            {error && (
              <ul className="error-messages">
                <li>That name is required</li>
              </ul>
            )}

            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    value={profilePictureUrl}
                    onChange={(e) =>
                      setFormInput(
                        produce((input) => {
                          input.profilePictureUrl = e.target.value;
                        }),
                      )
                    }
                    name="profilePictureUrl"
                    className="form-control"
                    type="text"
                    placeholder="URL of profile picture"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    value={username}
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
                    placeholder="Your Name"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    value={bio}
                    onChange={(e) =>
                      setFormInput(
                        produce((input) => {
                          input.bio = e.target.value;
                        }),
                      )
                    }
                    name="bio"
                    className="form-control form-control-lg"
                    rows="8"
                    placeholder="Short bio about you"
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    value={email}
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
                    value={password}
                    onChange={(e) =>
                      setFormInput(
                        produce((input) => {
                          input.password = e.target.value;
                        }),
                      )
                    }
                    autoComplete="on"
                    name="password"
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="New Password"
                  />
                </fieldset>
                <button
                  disabled={!(profilePictureUrl && username && email)}
                  className="btn btn-lg btn-primary pull-xs-right"
                  onClick={handleSubmit}
                >
                  Update Settings
                </button>
              </fieldset>
            </form>
            <hr />
            <button
              onClick={handleClickLogout}
              className="btn btn-outline-danger"
            >
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

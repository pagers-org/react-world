'use client';
import useUserStore from '@/stores/useUserStore';
import { articleTextarea } from '@/styles/article.css';
import { container, flex, hr, input } from '@/styles/common.css';
import { logoutButton, settingBlock, settingForm, settingTitle, updateButton } from '@/styles/settings.css';
import { User, UserAction } from '@/types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { useState } from 'react';

const SettingsPage = () => {
  const router = useRouter();

  const { logout, updateUser, email, username, image, bio } = useUserStore() as User & UserAction;

  // 초기화 함수로 전환
  const [formData, setFormData] = useState({
    image,
    username,
    bio: bio ? bio : '',
    email,
    password: '',
  });
  const { mutate, isLoading } = useMutation({
    mutationFn: (formData: any) =>
      fetch('/api/auth/user', { method: 'PUT', body: JSON.stringify(formData) }).then(res => res.json()),
    onSuccess: data => {
      console.log(data);
      console.log('성공');
      updateUser({
        ...formData,
      });
      router.push(`/@${username}`);
    },
    onError: () => {
      alert('실패');
    },
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    mutate({
      ...formData,
      password: formData && formData.password,
    });
  };

  const handleChange = (e: any) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const signOut = async () => {
    try {
      await fetch('/api/auth/logout');

      logout();
      router.push('/login');
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <section className={container}>
      <div className={settingBlock}>
        <div className={settingTitle}>Your Settings</div>
        <form onSubmit={handleSubmit} className={settingForm}>
          <input
            type="text"
            name="iamge"
            className={input}
            placeholder="URL of profile picture"
            value={formData.image}
            onChange={handleChange}
            readOnly={isLoading}
          />
          <input
            type="text"
            name="username"
            className={input}
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            readOnly={isLoading}
          />
          <textarea
            rows={8}
            name="bio"
            className={articleTextarea}
            placeholder="Short bio about you"
            value={formData.bio}
            onChange={handleChange}
            readOnly={isLoading}
          ></textarea>
          <input
            type="email"
            name="email"
            className={input}
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            readOnly={isLoading}
          />
          <input
            type="password"
            name="password"
            className={input}
            placeholder="New Password"
            value={formData.password}
            onChange={handleChange}
            readOnly={isLoading}
          />
          <div>
            <input type="submit" className={updateButton} value="Update Settings" />
          </div>
          <div className={hr} />
          <div className={flex}>
            <button className={logoutButton} onClick={signOut}>
              Or click here to logout.
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SettingsPage;

'use client';
import { updateUser } from '@/services/users';
import useUserStore from '@/stores/useUserStore';
import { articleTextarea } from '@/styles/article.css';
import { container, flex, hr, input } from '@/styles/common.css';
import { logoutButton, settingBlock, settingForm, settingTitle, updateButton } from '@/styles/settings.css';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

const SettingsPage = () => {
  const { email, username, image, bio, password, logout } = useUserStore();

  // 초기화 함수로 전환
  const [formData, setFormData] = useState({
    image,
    username,
    bio,
    email,
    password,
  });
  const { mutate, isLoading } = useMutation({
    mutationFn: updateUser,
    onError: err => {
      console.error(err);
    },
    onSuccess: () => {
      alert('회원 정보를 변경했습니다!');

      console.log('성공!');
    },
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    mutate({
      ...formData,
    });
  };

  const handleChange = (e: any) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
          />
          <input
            type="text"
            name="username"
            className={input}
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <textarea
            rows={8}
            name="bio"
            className={articleTextarea}
            placeholder="Short bio about you"
            value={formData.bio}
            onChange={handleChange}
          ></textarea>
          <input
            type="email"
            name="email"
            className={input}
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className={input}
            placeholder="New Password"
            value={formData.password}
            onChange={handleChange}
          />
          <div>
            <input type="submit" className={updateButton} value="Update Settings" />
          </div>
          <div className={hr} />
          <div className={flex}>
            <button className={logoutButton} onClick={logout}>
              Or click here to logout.
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SettingsPage;

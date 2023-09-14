'use client';
import { updateUserAPI } from '@/services/users';
import useUserStore from '@/stores/useUserStore';
import { articleTextarea } from '@/styles/article.css';
import { container, flex, hr, input } from '@/styles/common.css';
import { logoutButton, settingBlock, settingForm, settingTitle, updateButton } from '@/styles/settings.css';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

const SettingsPage = () => {
  const { email, username, image, bio, password, logout, updateUser } = useUserStore();

  // 초기화 함수로 전환
  const [formData, setFormData] = useState({
    image,
    username,
    bio,
    email,
    password,
  });
  const { mutate, isLoading } = useMutation({
    mutationFn: updateUserAPI,
    onError: err => {
      console.error(err);
    },
    onSuccess: res => {
      alert('회원 정보를 변경했습니다!');
      updateUser({
        ...res.user,
      });
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

'use client';
import { http } from '@/libs/http';
import useUserStore from '@/stores/useUserStore';
import { container, input } from '@/styles/common.css';
import { button } from '@/styles/layout.css';
import { settingBlock, settingForm, settingTitle } from '@/styles/settings.css';
import { useState } from 'react';

const SettingsPage = () => {
  // const { email, username } = useUserStore();
  const [formData, setFormData] = useState({
    iamge: '',
    username: '',
    bio: '',
    email: '',
    password: '',
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // route.ts로 이동
    http.put('https://api.realworld.io/api/user', formData);
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
            value={formData.iamge}
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
            className={input}
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
          <input type="submit" className={button} value="Update Settings" />
        </form>
        <hr />
        <button className={button}>Or click here to logout.</button>
      </div>
    </section>
  );
};

export default SettingsPage;

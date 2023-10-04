'use client';

import ArticleList from '@/components/article/ArticleList';
import { SettingIcon } from '@/composables/icons';
import useUserStore from '@/stores/useUserStore';
import { container } from '@/styles/common.css';
import { settingButton, userBlock, userImage, userInfo, userName } from '@/styles/profile.css';
import { User } from '@/types';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const ArticleTab = dynamic(() => import('@/components/article/ArticleTab'), { ssr: false });

const ProfilePage = () => {
  const { username } = useUserStore() as User;
  return (
    <section>
      <div className={userBlock}>
        <div className={userInfo}>
          <Image
            src={'https://api.realworld.io/images/smiley-cyrus.jpeg'}
            alt="Profile"
            width={100}
            height={100}
            className={userImage}
          />
          <div className={userName}>{username}</div>
          <Link href="/settings" className={settingButton}>
            <SettingIcon />
            &nbsp; Edit Profile Settings
          </Link>
        </div>
      </div>
      <div className={container}>
        <ArticleTab />
        <ArticleList />
      </div>
    </section>
  );
};

export default ProfilePage;

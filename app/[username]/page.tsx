'use client';

import ArticleList from '@/components/article/ArticleList';
import FollowButton from '@/components/user/FollowButton';
import { SettingIcon } from '@/composables/icons';
import useProfile from '@/hooks/useProfile';
import useUserStore from '@/stores/useUserStore';
import { container } from '@/styles/common.css';
import { settingButton, userBlock, userImage, userInfo, userName } from '@/styles/profile.css';
import { User } from '@/types';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const ArticleTab = dynamic(() => import('@/components/article/ArticleTab'), { ssr: false });
type Props = {
  params: { username: string };
};
const ProfilePage = ({ params: { username } }: Props) => {
  const { username: currentUsername } = useUserStore() as User;

  const { profile } = useProfile({ username });

  console.log(profile);

  return (
    <section>
      <div className={userBlock}>
        <div className={userInfo}>
          <Image src={profile.image} alt="Profile" width={100} height={100} className={userImage} />
          <div className={userName}>{profile.username}</div>
          {currentUsername === profile.username ? (
            <Link href="/settings" className={settingButton}>
              <SettingIcon />
              &nbsp; Edit Profile Settings
            </Link>
          ) : (
            <FollowButton author={{ username: profile.username, following: profile.following }} />
          )}
        </div>
      </div>
      <div className={container}>
        <ArticleTab />
        <ArticleList username={profile.username} />
      </div>
    </section>
  );
};

export default ProfilePage;

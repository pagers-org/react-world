'use client';

import ArticleList from '@/components/article/ArticleList';
import { SettingIcon } from '@/composables/icons';
import { container } from '@/styles/common.css';
import { settingButton, userBlock, userImage, userInfo, userName } from '@/styles/profile.css';
import { useQuery } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const ArticleTab = dynamic(() => import('@/components/article/ArticleTab'), { ssr: false });
type Props = {
  params: { username: string };
};
const ProfilePage = ({ params: { username } }: Props) => {
  const { data: profile } = useQuery({
    queryKey: ['profile', username],
    queryFn: () => fetch(`/api/profiles/${username}`).then(res => res.json()),
    enabled: !!username,
    select: res => res.response.profile,
  });

  console.log(profile);

  return (
    <section>
      <div className={userBlock}>
        <div className={userInfo}>
          <Image src={profile.image} alt="Profile" width={100} height={100} className={userImage} />
          <div className={userName}>{profile.username}</div>
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

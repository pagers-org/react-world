'use client';

import ArticleList from '@/components/article/ArticleList';
import ProfileBox from '@/components/profile/ProfileBox';
import useProfile from '@/hooks/useProfile';
import { container } from '@/styles/common.css';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ArticleTab = dynamic(() => import('@/components/article/ArticleTab'), { ssr: false });
type Props = {
  params: { username: string };
};
const ProfilePage = ({ params: { username } }: Props) => {
  const { profile } = useProfile({ username });

  return (
    <section>
      <ProfileBox username={profile.username} following={profile.following} image={profile.image} />
      <div className={container}>
        <ArticleTab />
        <Suspense fallback={<div>리스트 로딩 중...</div>}>
          <ArticleList username={profile.username} />
        </Suspense>
      </div>
    </section>
  );
};

export default ProfilePage;

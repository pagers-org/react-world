import { redirect } from 'next/navigation';

import ProfileUserPageMain from '@/pageComponents/profile/[username]/ProfileUserPageMain';

import { getProfile } from '@/api/profile';

const getCurrentProfile = async (username: string) => {
  const res = await getProfile(username);

  if (!res?.profile) {
    redirect('/');
  }

  return res.profile;
};

const ProfileUserPage = async ({
  params,
}: {
  params: { username: string };
}) => {
  const profile = await getCurrentProfile(params.username);

  return <ProfileUserPageMain profile={profile} />;
};

export default ProfileUserPage;

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import ProfileUserPageMain from '@/pageComponents/profile/[username]/ProfileUserPageMain';

import { COOKIE_ACCESS_TOKEN_KEY } from '@/constants/key';

import { getProfile } from '@/api/profile';

const getCurrentProfile = async (username: string) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(COOKIE_ACCESS_TOKEN_KEY)?.value;

  const res = await getProfile(
    username,
    accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
  );

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

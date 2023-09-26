import { ProfileResponse } from '@/types/api/profile';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import ProfileUserPageMain from '@/pageComponents/profile/[username]/ProfileUserPageMain';

import { COOKIE_ACCESS_TOKEN_KEY } from '@/constants/key';

import { getProfile } from '@/api/profile';

const getCurrentProfile = async (username: string) => {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get(COOKIE_ACCESS_TOKEN_KEY)?.value;

    const res = (await getProfile({
      username,
      headers: {
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
    })) as ProfileResponse;

    return res.profile;
  } catch (e) {
    redirect('/');
  }
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

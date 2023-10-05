import { UserResponse } from '@/types/api/users';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import SettingsPageMain from '@/pageComponents/settings/SettingsPageMain';

import { COOKIE_ACCESS_TOKEN_KEY } from '@/constants/key';

import { getCurrentUser } from '@/api/users';

const getMySettings = async () => {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get(COOKIE_ACCESS_TOKEN_KEY)?.value;

    const res = (await getCurrentUser({
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })) as UserResponse;

    return res.user;
  } catch (e) {
    redirect('/login');
  }
};

const SettingsPage = async () => {
  const mySettings = await getMySettings();

  return <SettingsPageMain mySettings={mySettings} />;
};

export default SettingsPage;

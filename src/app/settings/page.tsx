import { cookies } from 'next/headers';

import SettingsPageMain from '@/pageComponents/settings/SettingsPageMain';

import { COOKIE_ACCESS_TOKEN_KEY } from '@/constants/key';

import { getCurrentUser } from '@/api/users';

const getMySettings = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(COOKIE_ACCESS_TOKEN_KEY)?.value;

  const res = await getCurrentUser({ Authorization: `Bearer ${accessToken}` });

  return res.user;
};

const SettingsPage = async () => {
  const mySettings = await getMySettings();

  return <SettingsPageMain mySettings={mySettings} />;
};

export default SettingsPage;

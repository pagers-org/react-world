import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import HomePageMain from '@/pageComponents/HomePageMain';

import { COOKIE_ACCESS_TOKEN_KEY } from '@/constants/key';

import { getGlobalFeeds, getMyFeeds } from '@/api/articles';

const getFeeds = async (
  type: string,
  page: string = '1',
  perPage: string = '10',
) => {
  if (type !== 'your' && type !== 'global') {
    type = 'your';
  }

  const cookieStore = cookies();
  const accessToken = cookieStore.get(COOKIE_ACCESS_TOKEN_KEY)?.value;

  if (!accessToken) {
    type = 'global';
  }

  const getFn = type === 'your' ? getMyFeeds : getGlobalFeeds;

  const offset = ((Number(page) - 1) * Number(perPage)).toString();
  const limit = perPage;

  const res = await getFn(
    {
      offset,
      limit,
    },
    accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
  );

  return res;
};

const HomePage = async ({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) => {
  const feeds = await getFeeds(
    (searchParams?.type as string) ?? 'your',
    (searchParams?.page as string) ?? '1',
    (searchParams?.perPage as string) ?? '10',
  );

  return <HomePageMain feeds={feeds} />;
};

export default HomePage;

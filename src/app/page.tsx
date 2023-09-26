import { cookies } from 'next/headers';

import HomePageMain from '@/pageComponents/HomePageMain';

import { FEED_PER_PAGE, INITIAL_PAGE } from '@/constants/api';
import { COOKIE_ACCESS_TOKEN_KEY } from '@/constants/key';

import { getGlobalFeeds, getMyFeeds } from '@/api/articles';

const getFeeds = async (page: string, perPage: string) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(COOKIE_ACCESS_TOKEN_KEY)?.value;

  const getFn = accessToken ? getMyFeeds : getGlobalFeeds;

  const offset = ((parseInt(page) - 1) * parseInt(perPage)).toString();
  const limit = perPage;

  const res = await getFn({
    queryStrings: {
      offset,
      limit,
    },
    headers: {
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
  });

  return res;
};

const HomePage = async ({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) => {
  const feeds = await getFeeds(
    (searchParams?.page as string) ?? INITIAL_PAGE,
    (searchParams?.perPage as string) ?? FEED_PER_PAGE,
  );

  return <HomePageMain feeds={feeds} />;
};

export default HomePage;

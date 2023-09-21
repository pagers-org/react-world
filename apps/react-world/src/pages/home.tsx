import HomePageContainer from '@components/home/HomePageContainer';
import { HomeBanner } from '@components/home/HomeBanner';
import HomeFeedContents from '@components/home/HomeFeedContents';
import { useLocation } from 'react-router-dom';
import { useQueryParamSetter } from '@hooks/useQueryParamSetter';

export const HomePage = () => {
  const location = useLocation();
  const currentParams = new URLSearchParams(location.search);

  // 기본 쿼리 파라미터가 없으면 포함해서 다시 URL 로딩
  const params = useQueryParamSetter(currentParams, {
    feed: 'global',
    page: '1',
  });

  const feedType = params.get('feed') || 'global';
  const page = Number(params.get('page')) || 1;

  return (
    <HomePageContainer>
      <HomeBanner />
      <HomeFeedContents feedType={feedType} page={page} />
    </HomePageContainer>
  );
};

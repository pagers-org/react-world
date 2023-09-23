import HomePageContainer from '@components/home/HomePageContainer';
import { HomeBanner } from '@components/home/HomeBanner';
import HomeFeedContents from '@components/home/HomeFeedContents';
import { useLocation } from 'react-router-dom';
import { useDefaultQueryParamsSetter } from '@hooks/useDefaultQueryParamsSetter';
import { useConditionalReplace } from '@hooks/useConditionalReplace';

export const HomePage = () => {
  const location = useLocation();
  const currentParams = new URLSearchParams(location.search);

  // 기본 쿼리 파라미터가 없으면 포함해서 다시 URL 로딩
  const { hasParamsChanged: shouldRepace, newParams } =
    useDefaultQueryParamsSetter(currentParams, {
      feed: 'global',
      page: '1',
    });
  useConditionalReplace(shouldRepace, `?${newParams.toString()}`);

  const feedType = newParams.get('feed') || 'global';
  const page = Number(newParams.get('page')) || 1;

  return (
    <HomePageContainer>
      <HomeBanner />
      <HomeFeedContents feedType={feedType} page={page} />
    </HomePageContainer>
  );
};

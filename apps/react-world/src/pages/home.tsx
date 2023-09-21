import HomePageContainer from '../components/home/HomePageContainer';
import { HomeBanner } from '../components/home/HomeBanner';
import HomeFeedContents from '../components/home/HomeFeedContents';
import { useLocation } from 'react-router-dom';

export const HomePage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const feedType = params.get('feed') || 'global';
  const page = Number(params.get('page')) || 1;

  return (
    <HomePageContainer>
      <HomeBanner />
      <HomeFeedContents feedType={feedType} page={page} />
    </HomePageContainer>
  );
};

import HomePageContainer from '../components/home/HomePageContainer';
import { HomeBanner } from '../components/home/HomeBanner';
import HomeFeedContents from '../components/home/HomeFeedContents';

export const HomePage = () => {
  return (
    <HomePageContainer>
      <HomeBanner />
      <HomeFeedContents />
    </HomePageContainer>
  );
};

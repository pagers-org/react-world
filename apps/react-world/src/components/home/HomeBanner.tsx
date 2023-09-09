import {
  HomeBannerContainer,
  HomeBannerText,
  HomeBannerTitle,
} from './HomeBanner.styled';

export const HomeBanner: React.FC = () => {
  return (
    <HomeBannerContainer>
      <HomeBannerTitle>conduit</HomeBannerTitle>
      <HomeBannerText>A place to share your knowledge.</HomeBannerText>
    </HomeBannerContainer>
  );
};

import styled from '@emotion/styled';
import { Banner, BannerTitle } from '../shared/Banner/Banner.styled';

export const HomeBannerContainer = styled(Banner)`
  background: #5cb85c;
  box-shadow:
    inset 0 8px 8px -8px rgba(0, 0, 0, 0.3),
    inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

export const HomeBannerTitle = styled(BannerTitle)`
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  font-weight: 700;
  font-size: 3.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0px;
  font-family: 'Titillium Web', sans-serif;
`;

export const HomeBannerText = styled.p`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 0px;
`;

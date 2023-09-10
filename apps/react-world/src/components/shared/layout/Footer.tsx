import { Container } from '../Container';
import {
  FooterContainer,
  FooterLogo,
  FooterIntroduceText,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterLogo href="/">conduit</FooterLogo>
        <FooterIntroduceText>
          An interactive learning project from{' '}
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </FooterIntroduceText>
      </Container>
    </FooterContainer>
  );
};

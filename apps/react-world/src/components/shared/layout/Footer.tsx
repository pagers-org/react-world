import { Container } from '../Container';
import { FooterContainer, FooterLogo, AttributedText } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterLogo href="/">conduit</FooterLogo>
        <AttributedText>
          An interactive learning project from{' '}
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </AttributedText>
      </Container>
    </FooterContainer>
  );
};

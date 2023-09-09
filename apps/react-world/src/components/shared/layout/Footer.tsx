import { Container } from '../Container';
import { FooterContainer, Logo, AttributedText } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Logo href="/">conduit</Logo>
        <AttributedText>
          An interactive learning project from{' '}
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </AttributedText>
      </Container>
    </FooterContainer>
  );
};

import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  background: #f3f3f3;
  margin-top: 3rem;
  padding: 1rem 0;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const Logo = styled.a`
  vertical-align: middle;
`;

export const AttributedText = styled.span`
  vertical-align: middle;
  margin-left: 10px;
  font-size: 0.8rem;
  color: #bbb;
  font-weight: 300;

  a {
    text-decoration: underline;
  }
`;

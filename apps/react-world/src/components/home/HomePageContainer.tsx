import type { ReactNode } from 'react';
import styled from '@emotion/styled';

type ContainerProps = {
  children?: ReactNode;
};

export const HomePageContainer = ({ children }: ContainerProps) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  &.home-page .feed-toggle {
    margin-bottom: -1px;
  }

  &.home-page .sidebar {
    padding: 5px 10px 10px 10px;
    background: #f3f3f3;
    border-radius: 4px;
  }

  &.home-page .sidebar p {
    margin-bottom: 0.2rem;
  }
`;

export default HomePageContainer;

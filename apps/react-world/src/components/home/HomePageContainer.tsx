import type { ReactNode } from 'react';
import styled from '@emotion/styled';

type HomePageContainerProps = {
  children?: ReactNode;
};

const HomePageContainer = styled.div<HomePageContainerProps>`
  .feed-toggle {
    margin-bottom: -1px;
  }

  .sidebar {
    padding: 5px 10px 10px 10px;
    background: #f3f3f3;
    border-radius: 4px;
  }

  .sidebar p {
    margin-bottom: 0.2rem;
  }
`;

export default HomePageContainer;

import styled from '@emotion/styled';
import HomeFeedTabItem from './HomeFeedTabItem';

interface HomeFeedTabProps {
  activeFeed: 'my_feed' | 'global_feed';
}

const HomeFeedTab = ({ activeFeed }: HomeFeedTabProps) => (
  <HomeFeedTabContainer>
    <HomeFeedTabItem isActive={activeFeed === 'my_feed'} href="#">
      Your Feed
    </HomeFeedTabItem>
    <HomeFeedTabItem isActive={activeFeed === 'global_feed'} href="#">
      Global Feed
    </HomeFeedTabItem>
  </HomeFeedTabContainer>
);

const HomeFeedTabContainer = styled.ul`
  display: flex;
  gap: 0.2rem;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

  &::after {
    content: '';
    display: table;
    clear: both;
  }

  .nav-link {
    display: block;
    padding: 0.5em 1em;
    border-radius: 0;
    border: none;
    border-bottom: 2px solid transparent;
    background: transparent;
    color: #aaa;

    &:hover {
      color: #555;
    }

    &.active {
      background: #fff;
      border-bottom: 2px solid #5cb85c;
      color: #5cb85c;
    }
  }
`;

export default HomeFeedTab;

import styled from '@emotion/styled';

export const PopularArticleTagListContainer = styled.div`
  padding: 5px 10px 10px 10px;
  background: #f3f3f3;
  border-radius: 4px;
  p {
    margin-bottom: 0.2rem;
  }
`;

export const ArticleTag = styled.a`
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
  background-color: #818a91;
  color: #fff;
  font-size: 0.8rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  white-space: nowrap;
  margin-right: 3px;
  margin-bottom: 0.2rem;
  display: inline-block;
  &:hover {
    text-decoration: none;
    background-color: #687077;
  }
`;

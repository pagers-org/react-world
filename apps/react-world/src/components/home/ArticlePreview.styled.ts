import styled from '@emotion/styled';

export const ArticlePreviewContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.5rem 0;
`;

export const ArticlePreviewMeta = styled.div`
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
`;

export const AuthorProfileLink = styled.a`
  display: block;
`;

export const AuthorProfileImage = styled.img`
  display: inline-block;
  vertical-align: middle;
  height: 32px;
  width: 32px;
  border-radius: 30px;
`;

export const AuthorInfo = styled.div`
  margin: 0 1.5rem 0 0.3rem;
  display: inline-block;
  vertical-align: middle;
  line-height: 1rem;
`;

export const Author = styled.a`
  display: block;
  font-weight: 500;
`;

export const PublishedDate = styled.span`
  color: #bbb;
  font-size: 0.8rem;
  display: block;
`;

export const LikeButton = styled.button`
  display: inline-flex;
  padding: 0.25rem 0.5rem;
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-color: #5cb85c;
  border-radius: 0.2rem;
  color: #5cb85c;
  font-size: 0.875rem;
  display: inline-block;
  font-weight: normal;
  line-height: 1.25;
  text-align: center;
  user-select: none;
  cursor: pointer;
  margin-left: auto; /* 오른쪽으로 붙이기 위해 추가 */

  &:hover {
    color: #fff;
    background-color: #5cb85c;
  }
`;

export const ArticlePreviewLink = styled.a`
  color: inherit;

  &:hover {
    color: inherit; // Keep default color on hover
    text-decoration: none; // Remove underline on hover as well
  }
`;

export const ArticleTitle = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 3px;
`;

export const ArticleDescription = styled.p`
  font-weight: 300;
  font-size: 24px;
  color: #999;
  margin-bottom: 15px;
  font-size: 1rem;
  line-height: 1.3rem;
`;

export const ReadMore = styled.span`
  max-width: 30%;
  font-size: 0.8rem;
  font-weight: 300;
  color: #bbb;
  vertical-align: middle;
`;

export const TagList = styled.ul`
  float: right;
  max-width: 50%;
  vertical-align: top;
  padding-left: 0px;
`;

export const TagItem = styled.li`
  display: inline-block;
  border: 1px solid #ddd;
  color: #aaa;
  background: none;
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
  margin-right: 3px;
  margin-bottom: 0.2rem;

  font-weight: 300;
  font-size: 0.8rem;
  list-style: none;

  cursor: pointer;
`;

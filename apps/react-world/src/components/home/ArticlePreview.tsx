import type { ArticlePreviewResponse } from '../../apis/article/ArticlePreviewService.types';
import {
  ArticlePreviewContainer,
  ArticlePreviewMeta,
  AuthorProfileLink,
  AuthorProfileImage,
  AuthorInfo,
  Author,
  PublishedDate,
  LikeButton,
  ArticlePreviewLink,
  ArticleTitle,
  ArticleDescription,
  ReadMore,
  TagList,
  TagItem,
} from './ArticlePreview.styled';

interface ArticlePreviewProps {
  articlePreview: ArticlePreviewResponse;
}

const ArticlePreview = ({
  articlePreview: {
    authorProfileLink,
    authorProfileImageUrl,
    authorName,
    publishDate,
    likeCount,
    articleLink,
    articleTitle,
    articleDescription,
    tags,
  },
}: ArticlePreviewProps) => (
  <ArticlePreviewContainer>
    <ArticlePreviewMeta>
      <AuthorProfileLink href={authorProfileLink}>
        <AuthorProfileImage src={authorProfileImageUrl} />
      </AuthorProfileLink>
      <AuthorInfo>
        <Author href={authorProfileLink}>{authorName}</Author>
        <PublishedDate>{publishDate}</PublishedDate>
      </AuthorInfo>
      <LikeButton>{likeCount}</LikeButton>
    </ArticlePreviewMeta>
    <ArticlePreviewLink href={articleLink}>
      <ArticleTitle>{articleTitle}</ArticleTitle>
      <ArticleDescription>{articleDescription}</ArticleDescription>
      <ReadMore>Read more...</ReadMore>
      <TagList>
        {tags.map(tag => (
          <TagItem key={tag}>{tag}</TagItem>
        ))}
      </TagList>
    </ArticlePreviewLink>
  </ArticlePreviewContainer>
);

export default ArticlePreview;

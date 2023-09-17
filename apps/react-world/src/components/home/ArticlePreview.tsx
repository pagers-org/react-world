import type { ArticlePreviewData } from '../../apis/article/ArticlePreviewService.types';
import { formatDate } from '../../utils/dateUtils';
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
  articlePreview: ArticlePreviewData;
  onArticleClick: (articleSlug: string, articleLink: string) => void;
}

const ArticlePreview = ({
  articlePreview,
  onArticleClick,
}: ArticlePreviewProps) => {
  const authorProfileLink = `/profile/${articlePreview.author.username}`;
  const authorProfileImageUrl = articlePreview.author.image;
  const authorName = articlePreview.author.username;

  const publishDate = formatDate(articlePreview.createdAt);

  const articleLink = `/article/${articlePreview.slug}`;
  const articleTitle = articlePreview.title;
  const articleDescription = articlePreview.description;

  const likeCount = articlePreview.favoritesCount;
  const tagsList = articlePreview.tagList;

  return (
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
      <ArticlePreviewLink
        href={articleLink}
        onClick={e => {
          e.preventDefault(); // a 태그의 기본 이벤트 블락
          onArticleClick(articlePreview.slug, articleLink);
        }}
      >
        <ArticleTitle>{articleTitle}</ArticleTitle>
        <ArticleDescription>{articleDescription}</ArticleDescription>
        <ReadMore>Read more...</ReadMore>
        <TagList>
          {tagsList.map(tag => (
            <TagItem key={tag}>{tag}</TagItem>
          ))}
        </TagList>
      </ArticlePreviewLink>
    </ArticlePreviewContainer>
  );
};

export default ArticlePreview;

import { useParams } from 'react-router-dom';
import ArticlePageContainer from '@/components/article/ArticlePageContainer';

export const ArticlePage = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>() as {
    articleSlug: string; // 페이지가 열린다면 무조건 articleSlug 가 존재
  };

  return (
    <ArticlePageContainer articleSlug={articleSlug}></ArticlePageContainer>
  );
};

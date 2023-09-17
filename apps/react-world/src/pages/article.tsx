import { useParams } from 'react-router-dom';
import ArticlePageContainer from '../components/article/ArticlePageContainer';

export const ArticlePage = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();

  console.log('articleSlug: ' + articleSlug);

  return <ArticlePageContainer></ArticlePageContainer>;
};

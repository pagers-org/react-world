import { ArticleType, FeedResponseType } from '@/types/article';

import Article from '../Article/Article';

interface ArticlesProps {
  articles: ArticleType[];
}

const Articles = ({ articles }: ArticlesProps) => {
  if (articles?.length === 0) {
    return <div>피드가 없습니다...</div>;
  }

  return articles.map((article) => (
    <Article key={article.slug} article={article} />
  ));
};

export default Articles;

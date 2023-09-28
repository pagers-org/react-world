import { FeedResponseType } from '@/types/article';

import Article from '../Article/Article';

interface ArticlesProps {
  articles: FeedResponseType;
}

const Articles = ({ articles }: ArticlesProps) => {
  if (articles?.articles.length === 0) {
    return <div>피드가 없습니다...</div>;
  }

  return articles.articles.map((article) => (
    <Article key={article.slug} article={article} />
  ));
};

export default Articles;

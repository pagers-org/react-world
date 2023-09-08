import ArticleCard from '@/features/article/components/ArticleCard';

import { Article } from '@/features/article/types';

interface Props {
  articles: Article[];
}

export default function Articles({ articles }: Props) {
  return (
    <ul>
      {articles.map((article) => {
        return <ArticleCard key={article.slug} {...article} />;
      })}
    </ul>
  );
}

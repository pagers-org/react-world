import { ArticlesResponse } from './types';

// 상호작용은 client, 단순 정보 표시는 server
const ArticleList = async () => {
  const response = await fetch('https://api.realworld.io/api/articles?limit=20');
  const { articles } = (await response.json()) as ArticlesResponse;

  return (
    <div>
      {articles.map((article) => {
        const authorUsername = article.author.username;
        return <div>{authorUsername}</div>;
      })}
    </div>
  );
};

export default ArticleList;

import { ArticleType } from '@/types/article';

import DayFormatter from '@/utils/dayFormat';

interface ArticleProps {
  article: ArticleType;
}

const Article = ({ article }: ArticleProps) => {
  const { author } = article;
  const dayFormatter = new DayFormatter(new Date(article.createdAt));
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href={`/@${author.username}`}>
          <img src={author.image} />
        </a>
        <div className="info">
          <a href={`/@${author.username}`} className="author">
            {author.username}
          </a>
          <span className="date">{dayFormatter.getMonthDayYear()}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      </div>
      <a href={`/article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {article.tagList.map((tag) => (
            <li key={tag} className="tag-default tag-pill tag-outline">
              {tag}
            </li>
          ))}
        </ul>
      </a>
    </div>
  );
};

export default Article;

import type { ArticleDetailData } from '../../apis/article/ArticleService.types';
import { formatDate } from '../../utils/dateUtils';

interface ArticleHeaderProps {
  article: ArticleDetailData;
}

const ArticleHeader = (props: ArticleHeaderProps) => {
  const { article } = props;

  return (
    <div className="banner">
      <div className="container">
        <h1>{article.title}</h1>

        <div className="article-meta">
          <a href={`/profile/${article.author.username}`}>
            <img src={article.author.image} alt={article.author.username} />
          </a>
          <div className="info">
            <a href={`/profile/${article.author.username}`} className="author">
              {article.author.username}
            </a>
            <span className="date">{formatDate(article.createdAt)}</span>
          </div>
          <button className="btn btn-sm btn-outline-secondary">
            <i className="ion-plus-round"></i>
            &nbsp; Follow {article.author.username}{' '}
            <span className="counter">({article.favoritesCount})</span>
          </button>
          &nbsp;&nbsp;
          <button className="btn btn-sm btn-outline-primary">
            <i className="ion-heart"></i>
            &nbsp; Favorite Post <span className="counter">(29)</span>
          </button>
          <button className="btn btn-sm btn-outline-secondary">
            <i className="ion-edit"></i> Edit Article
          </button>
          <button className="btn btn-sm btn-outline-danger">
            <i className="ion-trash-a"></i> Delete Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;

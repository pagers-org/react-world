import type { ArticleAuthor } from '@/apis/article/Article.types';
import { formatDate } from '@/utils/dateUtils';

interface ArticleActionsProps {
  author: ArticleAuthor;
  createdAt: string;
  favorited: boolean;
  favoritesCount: number;
}

const ArticleActions = (props: ArticleActionsProps) => {
  const { author, createdAt, favorited, favoritesCount } = props;

  return (
    <div className="article-actions">
      <div className="article-meta">
        <a href={`profile/${author.username}`}>
          <img src={author.image || ''} alt={author.username} />
        </a>
        <div className="info">
          <a href={`profile/${author.username}`} className="author">
            {author.username}
          </a>
          <span className="date">{formatDate(createdAt)}</span>
        </div>
        <button className="btn btn-sm btn-outline-secondary">
          <i className="ion-plus-round"></i>
          &nbsp; Follow {author.username}
        </button>
        &nbsp;
        <button
          className={`btn btn-sm ${
            favorited ? 'btn-primary' : 'btn-outline-primary'
          }`}
        >
          <i className="ion-heart"></i>
          &nbsp; {favorited ? 'Unfavorite' : 'Favorite'} Article{' '}
          <span className="counter">({favoritesCount})</span>
        </button>
      </div>
    </div>
  );
};

export default ArticleActions;

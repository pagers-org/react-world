import { formatDate } from '@utils/dateUtils';

interface ArticleHeaderProps {
  title: string;
  authorName: string;
  authorImage: string;
  createdAt: string;
  favoritesCount: number;
}

const ArticleHeader = (props: ArticleHeaderProps) => {
  const { title, authorName, authorImage, createdAt, favoritesCount } = props;

  return (
    <div className="banner">
      <div className="container">
        <h1>{title}</h1>

        <div className="article-meta">
          <a href={`/profile/${authorName}`}>
            <img src={authorImage} alt={authorName} />
          </a>
          <div className="info">
            <a href={`/profile/${authorName}`} className="author">
              {authorName}
            </a>
            <span className="date">{formatDate(createdAt)}</span>
          </div>
          <button className="btn btn-sm btn-outline-secondary">
            <i className="ion-plus-round"></i>
            &nbsp; Follow {authorName}{' '}
            <span className="counter">({favoritesCount})</span>
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

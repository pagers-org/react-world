import type { ArticleDTO } from "../_types/articles.types";

interface ArticleActionProps {
  article: ArticleDTO;
}

export function ArticleAction({ article: { article } }: ArticleActionProps): JSX.Element {
  const { author } = article;

  return (
    <div className="article-actions">
      <div className="article-meta">
        <a href="profile.html">
          <img alt="" src="http://i.imgur.com/Qr71crq.jpg" />
        </a>
        <div className="info">
          <a className="author" href="/">
            {author.username}
          </a>
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-sm btn-outline-secondary" type="button">
          <i className="ion-plus-round" />
          &nbsp; Following {author.username}
        </button>
        &nbsp;
        <button className={`btn btn-sm btn-outline-primary ${article.favorited ? "active" : ""}`} type="button">
          <i className="ion-heart" />
          &nbsp; Favorite Article <span className="counter">({article.favoritesCount})</span>
        </button>
        {/* <button className="btn btn-sm btn-outline-secondary" type="button">
              <i className="ion-edit" /> Edit Article
            </button>
            <button className="btn btn-sm btn-outline-danger" type="button">
              <i className="ion-trash-a" /> Delete Article
            </button> */}
      </div>
    </div>
  );
}

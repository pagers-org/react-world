import Link from "next/link";
import { useGetArticle } from "../_hooks/use-get-article";
import type { ArticleDTO } from "../_types/articles.types";

interface ArticleBannerProps {
  article: ArticleDTO;
}

export default function ArticleBanner({ article: { article } }: ArticleBannerProps): JSX.Element {
  const { author } = article;

  return (
    <div className="banner">
      <div className="container">
        <h1>{article.title}</h1>

        <div className="article-meta">
          <Link
            href={{
              pathname: `/profile/${author.username}`,
            }}
          >
            <img alt="" src={author.image} />
          </Link>
          <div className="info">
            <Link
              className="author"
              href={{
                pathname: `/profile/${author.username}`,
              }}
            >
              {author.username}
            </Link>
            <span className="date">January 20th</span>
          </div>
          <button className="btn btn-sm btn-outline-secondary" type="button">
            <i className="ion-plus-round" />
            &nbsp; Follow {article.author.username} <span className="counter">({author.following})</span>
          </button>
          &nbsp;&nbsp;
          <button className={`btn btn-sm btn-outline-primary ${article.favorited ? "active" : ""}`} type="button">
            <i className="ion-heart" />
            &nbsp; Favorite Post <span className="counter">({article.favoritesCount})</span>
          </button>
          {/* <button className="btn btn-sm btn-outline-secondary" type="button">
            <i className="ion-edit" /> Edit Article
          </button> */}
          {/* <button className="btn btn-sm btn-outline-danger" type="button">
              <i className="ion-trash-a" /> Delete Article
            </button> */}
        </div>
      </div>
    </div>
  );
}

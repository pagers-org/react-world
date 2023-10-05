import { ArticleType, FeedResponseType } from '@/types/article';
import { useState } from 'react';

import { favoriteUser, unFavoriteUser } from '@/api/article';

import DayFormatter from '@/utils/dayFormat';

interface ArticleProps {
  article: ArticleType;
  setData: (data: FeedResponseType) => void;
}

const Article = ({ article }: ArticleProps) => {
  const dayFormatter = new DayFormatter(new Date(article.createdAt));
  const [currentArticle, setCurrentArticle] = useState<ArticleType>(article);

  const handleClickFavoriteButton = async (
    isFavorite: boolean,
    slug: string,
  ) => {
    if (isFavorite) {
      const data = await cancelFavorite(slug);
      console.log(data);
      return setCurrentArticle(data);
    }
    if (!isFavorite) {
      const data = await await addFavorite(slug);
      console.log(data);
      return setCurrentArticle(data);
    }
  };

  const addFavorite = async (slug: string) => {
    try {
      const response = await favoriteUser(slug);
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const cancelFavorite = async (slug: string) => {
    try {
      const response = await unFavoriteUser(slug);
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  console.log(currentArticle);

  return (
    currentArticle && (
      <div className="article-preview">
        <div className="article-meta">
          <a href={`/@${currentArticle.author.username}`}>
            <img src={currentArticle.author.image} />
          </a>
          <div className="info">
            <a href={`/@${currentArticle.author.username}`} className="author">
              {currentArticle.author.username}
            </a>
            <span className="date">{dayFormatter.getMonthDayYear()}</span>
          </div>
          <button
            onClick={() =>
              handleClickFavoriteButton(article.favorited, article.slug)
            }
            className="btn btn-outline-primary btn-sm pull-xs-right"
          >
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
    )
  );
};

export default Article;

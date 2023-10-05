import { ArticleType } from '@/types/article';
import { produce } from 'immer';
import React, { Dispatch, SetStateAction, useEffect } from 'react';

import useUserFollow from '@/hooks/useUserFollow';

import UserProfile from './UserProfile';

interface FavoriteContainerProps {
  article: ArticleType;
  userNameReplaceSpaceToPercent: string;
  setArticle: Dispatch<SetStateAction<ArticleType | undefined>>;
  isMyArticle: boolean;
}

const FavoriteContainer = ({
  article,
  userNameReplaceSpaceToPercent,
  setArticle,
  isMyArticle,
}: FavoriteContainerProps) => {
  const { handleSetFollow, response, isLoading, isSuccess } = useUserFollow({
    following: article.author.following,
    name: article.author.username,
  });

  useEffect(() => {
    isSuccess &&
      setArticle(
        produce((article) => {
          article.author = response.profile;
        }),
      );
  }, [isSuccess]);

  useEffect(() => {}, []);

  isLoading && <div>팔로잉 중입니다.</div>;
  return (
    <div>
      <div className="article-actions">
        <UserProfile
          userNameReplaceSpaceToPercent={userNameReplaceSpaceToPercent}
          article={article}
          isMyArticle={isMyArticle}
          handleSetFollow={handleSetFollow}
        />
      </div>

      <div className="row">
        <div className="col-xs-12 col-md-8 offset-md-2">
          <form className="card comment-form">
            <div className="card-block">
              <textarea
                className="form-control"
                placeholder="Write a comment..."
                rows="3"
              ></textarea>
            </div>
            <div className="card-footer">
              <img
                src="http://i.imgur.com/Qr71crq.jpg"
                className="comment-author-img"
              />
              <button className="btn btn-sm btn-primary">Post Comment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FavoriteContainer;

import { ArticleType } from '@/types/article';
import { produce } from 'immer';
import { Dispatch, SetStateAction, useEffect } from 'react';

import useUserFollow from '@/hooks/useUserFollow';

import UserProfile from './UserProfile';

interface UserBannerProps {
  article: ArticleType;
  userNameReplaceSpaceToPercent: string;
  setArticle: Dispatch<SetStateAction<ArticleType | undefined>>;
  isMyArticle: boolean;
}

const UserBanner = ({
  article,
  userNameReplaceSpaceToPercent,
  setArticle,
  isMyArticle,
}: UserBannerProps) => {
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

  isLoading && <div>팔로잉 중입니다.</div>;
  return (
    <div className="banner">
      <div className="container">
        <h1>{article.title}</h1>

        <UserProfile
          userNameReplaceSpaceToPercent={userNameReplaceSpaceToPercent}
          article={article}
          isMyArticle={isMyArticle}
          handleSetFollow={handleSetFollow}
        />
      </div>
    </div>
  );
};

export default UserBanner;

'use client';

import { InduceSignIn } from '@/entities/comment';
import { ArticleTagList } from '@/entities/tag';
import { UserProfileAvatar } from '@/entities/user';
import { useGetArticle } from '@/shared/api/realworld/endpoints/articles/articles';
import { useGetArticleComments } from '@/shared/api/realworld/endpoints/comments/comments';
import { responsiveWidth } from '@/shared/css/responsive-width';
import { ArticleFavoriteToggleButton } from '@/widgets/article';
import { UserCommentList } from '@/widgets/comment';
import { UserFollowToggleButton } from '@/widgets/user';

const Article = ({ slug }: { slug: string }) => {
  const { data: articleResponse } = useGetArticle(slug, { query: { staleTime: 1000 } });
  const { data: commentsResponse } = useGetArticleComments(slug, { query: { staleTime: 1000 } });
  const { author, body, createdAt, favorited, favoritesCount, tagList, title } = articleResponse?.article!;
  const commentList = commentsResponse?.comments!;
  const formattedBody = body.replaceAll('\\n', '\n');

  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex justify-center p-32 mb-32 text-white bg-gray1800">
        <div className={`flex flex-col gap-16 ${responsiveWidth}`}>
          <h1 className="font-bold text-[3.5rem] [text-shadow:_0_1px_3px_rgb(0_0_0_/0.3)] leading-none">{title}</h1>
          <div className="flex items-center gap-24">
            <UserProfileAvatar author={author} createdAt={createdAt} usernameColor="text-white" />
            <div className="flex gap-8 button-group">
              <UserFollowToggleButton following={author.following} username={author.username} />
              <ArticleFavoriteToggleButton favorited={favorited} slug={slug} favoritesCount={favoritesCount} />
            </div>
          </div>
        </div>
      </div>

      <div className={`w-full flex justify-center items-center flex-col`}>
        <div className={`flex flex-col gap-32 ${responsiveWidth} `}>
          <p className="whitespace-pre-line">{formattedBody}</p>

          <ArticleTagList tagList={tagList} />
        </div>

        <div className={`w-full h-1 my-32 bg-gray1000 ${responsiveWidth}`} />

        <div className="flex flex-col gap-32">
          <div className="flex items-center justify-center gap-24">
            <UserProfileAvatar author={author} createdAt={createdAt} />
            <div className="flex gap-8 button-group">
              <UserFollowToggleButton following={author.following} username={author.username} />
              <ArticleFavoriteToggleButton favorited={favorited} slug={slug} favoritesCount={favoritesCount} />
            </div>
          </div>
          <InduceSignIn />
          <div className="w-728 max-desktop:w-595 max-tablet:w-544">
            <UserCommentList commentList={commentList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;

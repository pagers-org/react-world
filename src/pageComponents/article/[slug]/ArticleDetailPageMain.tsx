'use client';

import { useUserStore } from '@/stores/users';
import { ArticleResponse } from '@/types/api/articles';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useRef, useState } from 'react';

import { deleteArticle } from '@/api/articles';

import {
  useDeleteCommentMutation,
  usePostCommentMutation,
} from '@/hooks/query/comments/useCommentsMutation';
import { useCommentsQuery } from '@/hooks/query/comments/useCommentsQuery';
import {
  useDeleteFavoriteMutation,
  usePostFavoriteMutation,
} from '@/hooks/query/favorites/useFavoritesMutation';
import {
  useDeleteUnFollowUserMutation,
  usePostFollowUserMutation,
} from '@/hooks/query/profile/useProfileMutation';

interface Props {
  article: ArticleResponse['article'];
}

const ArticleDetailPageMain = ({ article }: Props) => {
  const router = useRouter();

  const currentUser = useUserStore((state) => state.user);

  const [currentArticle, setCurrentArticle] = useState(article);

  const {
    slug,
    title,
    description,
    body,
    tagList,
    createdAt,
    favorited,
    favoritesCount,
    author: {
      username: authorUsername,
      image: authorImage,
      following: isAuthorFollowing,
    },
  } = currentArticle;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentAuthorProfileMenus, setCurrentAuthorProfileMenus] =
    useState<ReactNode>(<></>);
  const [currentCommentForm, setCurrentCommentForm] = useState<ReactNode>(
    <></>,
  );

  const isAuthor = currentUser.username === authorUsername;

  const editCurrentArticle = () => {
    router.push(`/editor?title=${encodeURIComponent(slug)}`);
  };

  const deleteCurrentArticle = () => {
    setIsLoading(true);

    deleteArticle({ slug }).then(() => {
      router.push('/');

      setIsLoading(false);
    });
  };

  const {
    mutate: postFavoriteMutate,
    isLoading: isPostFavoriteMutationLoading,
  } = usePostFavoriteMutation();
  const {
    mutate: deleteFavoriteMutate,
    isLoading: isDeleteFavoriteMutationLoading,
  } = useDeleteFavoriteMutation();

  const favoriteCurrentArticle = (slug: string, favorited: boolean) => {
    if (!currentUser.email) {
      router.push('/login');
      return;
    }

    if (favorited) {
      deleteFavoriteMutate({ slug });
      setCurrentArticle((prev) => ({
        ...prev,
        favorited: !prev.favorited,
        favoritesCount: prev.favoritesCount - 1,
      }));
    } else {
      postFavoriteMutate({ slug });
      setCurrentArticle((prev) => ({
        ...prev,
        favorited: !prev.favorited,
        favoritesCount: prev.favoritesCount + 1,
      }));
    }
  };

  const { mutate: postFollowMutate, isLoading: isPostFollowLoading } =
    usePostFollowUserMutation();
  const { mutate: deleteUnfollowMutate, isLoading: isDeleteUnfollowLoading } =
    useDeleteUnFollowUserMutation();

  const followUser = (following: boolean) => {
    if (!currentUser.email) {
      router.push('/login');
      return;
    }

    if (following) {
      deleteUnfollowMutate(
        { username: authorUsername },
        {
          onSuccess: (res) => {
            const { profile } = res;
            setCurrentArticle((prev) => ({ ...prev, author: profile }));
          },
        },
      );
    } else {
      postFollowMutate(
        {
          username: authorUsername,
        },
        {
          onSuccess: (res) => {
            const { profile } = res;
            setCurrentArticle((prev) => ({ ...prev, author: profile }));
          },
        },
      );
    }
  };

  const { data: comments, isLoading: isCommentsLoading } = useCommentsQuery({
    slug,
  });

  const commentRef = useRef<HTMLTextAreaElement | null>(null);

  const { mutate: postCommentMutate, isLoading: isPostCommentLoading } =
    usePostCommentMutation();
  const { mutate: deleteCommentMutate } = useDeleteCommentMutation();

  const handleComment = (type: 'Post' | 'Delete', id?: number) => {
    if (!commentRef.current) {
      return;
    }

    if (type === 'Post') {
      postCommentMutate({
        slug,
        payload: {
          comment: {
            body: commentRef.current.value,
          },
        },
      });
    } else if (id) {
      deleteCommentMutate({
        slug,
        id,
      });
    }

    commentRef.current.value = '';
  };

  useEffect(() => {
    const authorProfileMenus = isAuthor ? (
      <>
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={editCurrentArticle}
        >
          <i className="ion-edit"></i> Edit Article
        </button>{' '}
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={deleteCurrentArticle}
          disabled={isLoading}
        >
          <i className="ion-trash-a"></i> Delete Article
        </button>
      </>
    ) : (
      <>
        <button
          className={`btn btn-sm ${classNames({
            'btn-secondary': isAuthorFollowing,
            'btn-outline-secondary': !isAuthorFollowing,
          })}`}
          type="button"
          onClick={() => followUser(isAuthorFollowing)}
          disabled={isPostFollowLoading || isDeleteUnfollowLoading}
        >
          <i className="ion-plus-round"></i>
          &nbsp;{' '}
          {`${isAuthorFollowing ? 'Unfollow' : 'Follow'} ${authorUsername}`}
        </button>
        &nbsp;
        <button
          className={`btn btn-sm ${classNames({
            'btn-outline-primary': !favorited,
            'btn-primary': favorited,
          })}`}
          onClick={() => favoriteCurrentArticle(slug, favorited)}
          disabled={
            isPostFavoriteMutationLoading || isDeleteFavoriteMutationLoading
          }
        >
          <i className="ion-heart"></i>
          &nbsp; {`${favorited ? 'Unfavorite' : 'Favorite'}`} Article{' '}
          <span className="counter">{`(${favoritesCount})`}</span>
        </button>
      </>
    );

    setCurrentAuthorProfileMenus(authorProfileMenus);
  }, [
    isAuthor,
    isLoading,
    isDeleteFavoriteMutationLoading,
    isPostFavoriteMutationLoading,
    isPostFollowLoading,
    isDeleteUnfollowLoading,
    isAuthorFollowing,
  ]);

  useEffect(() => {
    if (currentUser.username) {
      const currentCommentForm = (
        <form className="card comment-form">
          <div className="card-block">
            <textarea
              ref={commentRef}
              className="form-control"
              placeholder="Write a comment..."
              rows={3}
              disabled={isPostCommentLoading}
            ></textarea>
          </div>
          <div className="card-footer">
            <Image
              src={currentUser.image}
              alt={currentUser.username}
              width={30}
              height={30}
              className="comment-author-img"
            />
            <button
              className="btn btn-sm btn-primary"
              type="button"
              onClick={() => handleComment('Post')}
            >
              Post Comment
            </button>
          </div>
        </form>
      );
      setCurrentCommentForm(currentCommentForm);
    } else {
      const guideLine = (
        <p>
          <Link href="/login">Sign in</Link> or{' '}
          <Link href="/register">Sign up</Link> to add comments on this article.
        </p>
      );
      setCurrentCommentForm(guideLine);
    }
  }, [currentUser, isPostCommentLoading]);

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{title}</h1>

          <div className="article-meta">
            <Link href={`/profile/${authorUsername}`}>
              <Image
                src={authorImage}
                alt={authorUsername}
                width={32}
                height={32}
              />
            </Link>
            <div className="info">
              <Link href={`/profile/${authorUsername}`} className="author">
                {authorUsername}
              </Link>
              <span className="date">{createdAt}</span>
            </div>
            {currentAuthorProfileMenus}
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>{body}</p>
            <ul className="tag-list">
              {tagList.map((tag) => (
                <li key={tag} className="tag-default tag-pill tag-outline">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <div className="article-meta">
            <Link href={`/profile/${authorUsername}`}>
              <Image
                src={authorImage}
                alt={authorUsername}
                width={32}
                height={32}
              />
            </Link>
            <div className="info">
              <Link href={`/profile/${authorUsername}`} className="author">
                {authorUsername}
              </Link>
              <span className="date">{createdAt}</span>
            </div>
            {currentAuthorProfileMenus}
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            {currentCommentForm}

            {!isCommentsLoading && comments ? (
              comments?.comments.map(
                ({ id, body, createdAt, author: { username, image } }) => (
                  <div key={id} className="card">
                    <div className="card-block">
                      <p className="card-text">{body}</p>
                    </div>
                    <div className="card-footer">
                      <a href="/profile/author" className="comment-author">
                        <Image
                          className="comment-author-img"
                          src={image}
                          alt={username}
                          width={20}
                          height={20}
                        />
                      </a>
                      &nbsp;
                      <a
                        href="/profile/jacob-schmidt"
                        className="comment-author"
                      >
                        {username}
                      </a>
                      <span className="date-posted">{createdAt}</span>
                      {username === currentUser.username && (
                        <span
                          className="mod-options"
                          onClick={() => handleComment('Delete', id)}
                        >
                          <i className="ion-trash-a"></i>
                        </span>
                      )}
                    </div>
                  </div>
                ),
              )
            ) : (
              <>Loading comments...</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPageMain;

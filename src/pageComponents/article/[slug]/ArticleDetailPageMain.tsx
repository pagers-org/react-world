'use client';

import { queryClient } from '@/react-query/queryClient';
import { useUserStore } from '@/stores/users';
import { ArticleResponse } from '@/types/api/articles';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

import { deleteArticle } from '@/api/articles';

import {
  useDeleteFavoriteMutation,
  usePostFavoriteMutation,
} from '@/hooks/query/favorites/useFavoritesMutation';

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
    author: { username: authorUsername, image: authorImage },
  } = currentArticle;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentAuthorProfileMenus, setCurrentAuthorProfileMenus] =
    useState<ReactNode>(<></>);

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
        <button className="btn btn-sm btn-outline-secondary">
          <i className="ion-plus-round"></i>
          &nbsp; Follow Eric Simons <span className="counter">(10)</span>
        </button>
        &nbsp;&nbsp;
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
  ]);

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
            <form className="card comment-form">
              <div className="card-block">
                <textarea
                  className="form-control"
                  placeholder="Write a comment..."
                  rows={3}
                ></textarea>
              </div>
              <div className="card-footer">
                <Image
                  src="http://i.imgur.com/Qr71crq.jpg"
                  alt="eric simons"
                  width={30}
                  height={30}
                  className="comment-author-img"
                />
                <button className="btn btn-sm btn-primary">Post Comment</button>
              </div>
            </form>

            <div className="card">
              <div className="card-block">
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div className="card-footer">
                <a href="/profile/author" className="comment-author">
                  <Image
                    className="comment-author-img"
                    src="http://i.imgur.com/Qr71crq.jpg"
                    alt="eric simons"
                    width={20}
                    height={20}
                  />
                </a>
                &nbsp;
                <a href="/profile/jacob-schmidt" className="comment-author">
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
              </div>
            </div>

            <div className="card">
              <div className="card-block">
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div className="card-footer">
                <a href="/profile/author" className="comment-author">
                  <Image
                    className="comment-author-img"
                    src="http://i.imgur.com/Qr71crq.jpg"
                    alt="eric simons"
                    width={20}
                    height={20}
                  />
                </a>
                &nbsp;
                <a href="/profile/jacob-schmidt" className="comment-author">
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
                <span className="mod-options">
                  <i className="ion-trash-a"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPageMain;

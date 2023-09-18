'use client';

import { useUserStore } from '@/stores/users';
import { ArticleResponse } from '@/types/api/articles';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

import { deleteArticle } from '@/api/articles';

interface Props {
  article: ArticleResponse['article'];
}

const ArticleDetailPageMain = ({ article }: Props) => {
  const router = useRouter();

  const currentUser = useUserStore((state) => state.user);

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
  } = article;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentAuthorProfileMenus, setCurrentAuthorProfileMenus] =
    useState<ReactNode>(<></>);

  const isAuthor = currentUser.username === authorUsername;

  const handleEditArticle = () => {
    router.push(`/editor?title=${encodeURIComponent(slug)}`);
  };

  const handleDeleteArticle = () => {
    setIsLoading(true);

    deleteArticle(slug).then(() => {
      router.push('/');

      setIsLoading(false);
    });
  };

  useEffect(() => {
    const authorProfileMenus = isAuthor ? (
      <>
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={handleEditArticle}
        >
          <i className="ion-edit"></i> Edit Article
        </button>{' '}
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={handleDeleteArticle}
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
        <button className="btn btn-sm btn-outline-primary">
          <i className="ion-heart"></i>
          &nbsp; Favorite Post <span className="counter">(29)</span>
        </button>
      </>
    );

    setCurrentAuthorProfileMenus(authorProfileMenus);
  }, [isAuthor, isLoading]);

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

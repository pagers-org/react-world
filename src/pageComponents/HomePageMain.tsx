'use client';

import Pagination from '@/composables/Pagination';
import { useUserStore } from '@/stores/users';
import { FeedsResponse } from '@/types/api/articles';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

import { INITIAL_PAGE } from '@/constants/api';

import {
  useDeleteFavoriteMutation,
  usePostFavoriteMutation,
} from '@/hooks/query/favorites/useFavoritesMutation';

interface Props {
  feeds: FeedsResponse;
}

const HomePageMain = ({ feeds }: Props) => {
  // server-side fetch - server component만 이용

  const { push: navigate } = useRouter();
  const searchParams = useSearchParams();

  const user = useUserStore((state) => state.user);

  const [feedType, setFeedType] = useState<'your' | 'global'>();
  const [page, setPage] = useState<number>(1);

  const [tabsElement, setTabsElement] = useState<ReactNode>();

  const { articlesCount, articles } = feeds;

  const [currentArticles, setCurrentArticles] = useState(articles);

  const {
    mutate: postFavoriteMutate,
    isLoading: isPostFavoriteMutationLoading,
  } = usePostFavoriteMutation();
  const {
    mutate: deleteFavoriteMutate,
    isLoading: isDeleteFavoriteMutationLoading,
  } = useDeleteFavoriteMutation();

  const favoriteArticle = (slug: string, favorited: boolean) => {
    if (!user.email) {
      navigate('/login');
      return;
    }

    if (favorited) {
      deleteFavoriteMutate({ slug });
      setCurrentArticles((prev) =>
        prev.map((article) =>
          article.slug === slug
            ? {
                ...article,
                favorited: !article.favorited,
                favoritesCount: article.favoritesCount - 1,
              }
            : article,
        ),
      );
    } else {
      postFavoriteMutate({ slug });
      setCurrentArticles((prev) =>
        prev.map((article) =>
          article.slug === slug
            ? {
                ...article,
                favorited: !article.favorited,
                favoritesCount: article.favoritesCount + 1,
              }
            : article,
        ),
      );
    }
  };

  useEffect(() => {
    let type = searchParams?.get('type') ?? 'your';

    if (!user.email) {
      type = 'global';
    } else if (type !== 'your' && type !== 'global') {
      type = 'your';
    }

    setFeedType(type as 'your' | 'global');
  }, [searchParams, user.email]);

  useEffect(() => {
    const page = searchParams?.get('page') ?? INITIAL_PAGE;

    setPage(parseInt(page));
  }, [searchParams]);

  useEffect(() => {
    const tabsElement = (
      <ul className="nav nav-pills outline-active">
        {user.email && (
          <li className="nav-item">
            <Link
              className={`nav-link ${classNames({
                active: feedType === 'your',
              })}`}
              href={{
                query: {
                  type: 'your',
                  page: INITIAL_PAGE,
                },
              }}
              onClick={() => setFeedType('your')}
            >
              Your Feed
            </Link>
          </li>
        )}
        <li className="nav-item">
          <Link
            className={`nav-link ${classNames({
              active: feedType === 'global',
            })}`}
            href={{
              query: {
                type: 'global',
                page: INITIAL_PAGE,
              },
            }}
            onClick={() => setFeedType('global')}
          >
            Global Feed
          </Link>
        </li>
      </ul>
    );

    setTabsElement(tabsElement);
  }, [user.email, feedType]);

  return (
    tabsElement && (
      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle">{tabsElement}</div>

              {currentArticles.map(
                ({
                  slug,
                  title,
                  description,
                  favorited,
                  tagList,
                  createdAt,
                  favoritesCount,
                  author: { username: authorUsername, image: authorImage },
                }) => (
                  <div key={slug} className="article-preview">
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
                        <Link
                          href={`/profile/${authorUsername}`}
                          className="author"
                        >
                          {authorUsername}
                        </Link>
                        <span className="date">{createdAt}</span>
                      </div>
                      <button
                        className={`btn btn-sm pull-xs-right ${classNames({
                          'btn-outline-primary': !favorited,
                          'btn-primary': favorited,
                        })}`}
                        onClick={() => favoriteArticle(slug, favorited)}
                        disabled={
                          isPostFavoriteMutationLoading ||
                          isDeleteFavoriteMutationLoading
                        }
                      >
                        <i className="ion-heart"></i> {favoritesCount}
                      </button>
                    </div>
                    <Link href={`/article/${slug}`} className="preview-link">
                      <h1>{title}</h1>
                      <p>{description}</p>
                      <span>Read more...</span>
                      <ul className="tag-list">
                        {tagList.map((tag) => (
                          <li
                            key={tag}
                            className="tag-default tag-pill tag-outline"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </Link>
                  </div>
                ),
              )}

              <Pagination
                totalCounts={articlesCount}
                page={page}
                perPage={10}
              />
            </div>

            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>

                <div className="tag-list">
                  <Link href="" className="tag-pill tag-default">
                    programming
                  </Link>
                  <Link href="" className="tag-pill tag-default">
                    javascript
                  </Link>
                  <Link href="" className="tag-pill tag-default">
                    emberjs
                  </Link>
                  <Link href="" className="tag-pill tag-default">
                    angularjs
                  </Link>
                  <Link href="" className="tag-pill tag-default">
                    react
                  </Link>
                  <Link href="" className="tag-pill tag-default">
                    mean
                  </Link>
                  <Link href="" className="tag-pill tag-default">
                    node
                  </Link>
                  <Link href="" className="tag-pill tag-default">
                    rails
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default HomePageMain;

'use client';

import Pagination from '@/composables/Pagination';
import { useUserStore } from '@/stores/users';
import { FeedsResponse } from '@/types/api/articles';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ReactNode, useCallback, useEffect, useState } from 'react';

import { FEED_PER_PAGE, INITIAL_PAGE } from '@/constants/api';

import {
  useArticlesQuery,
  useMyFeedArticlesQuery,
} from '@/hooks/query/articles/useArticlesQuery';
import {
  useDeleteFavoriteMutation,
  usePostFavoriteMutation,
} from '@/hooks/query/favorites/useFavoritesMutation';
import { useTagsQuery } from '@/hooks/query/tags/useTagsQuery';

const HomePageMain = () => {
  const { push: navigate } = useRouter();
  const searchParams = useSearchParams();

  const user = useUserStore((state) => state.user);

  const [feedType, setFeedType] = useState<string>();
  const [page, setPage] = useState<number>(1);

  const [myFeedTabElement, setMyFeedTabElement] = useState<ReactNode>(<></>);
  const [tagFeedTabElement, setTagFeedTabElement] = useState<ReactNode>(<></>);

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
    } else {
      postFavoriteMutate({ slug });
    }
  };

  const [currentArticles, setCurrentArticles] = useState<FeedsResponse | null>(
    null,
  );

  const offset = ((page - 1) * parseInt(FEED_PER_PAGE)).toString();
  const limit = FEED_PER_PAGE;

  const useQuery =
    feedType === 'your' ? useMyFeedArticlesQuery : useArticlesQuery;

  const {
    data: articles,
    isLoading: isArticlesLoading,
    isFetching: isArticlesFetching,
  } = useQuery(
    feedType !== 'global' && feedType !== 'your'
      ? {
          queryStrings: {
            offset,
            limit,
            tag: feedType,
          },
        }
      : {
          queryStrings: {
            offset,
            limit,
          },
        },
  );

  const { data: popularTags, isLoading: isPopularTagsLoading } = useTagsQuery();

  const handlePopularTag = (popularTag: string) => {
    const tagFeedTabElement = (
      <li className="nav-item">
        <Link
          className={`nav-link active`}
          href={{
            query: {
              page: INITIAL_PAGE,
            },
          }}
          onClick={() => setFeedType(popularTag)}
        >
          {`# ${popularTag}`}
        </Link>
      </li>
    );

    setTagFeedTabElement(tagFeedTabElement);
    setFeedType(popularTag);
  };

  useEffect(() => {
    if (user.email) {
      setFeedType('your');
    } else {
      setFeedType('global');
    }
  }, [user]);

  useEffect(() => {
    const page = searchParams?.get('page') ?? INITIAL_PAGE;

    setPage(parseInt(page));
  }, [searchParams]);

  useEffect(() => {
    if (isArticlesLoading || !articles) {
      return;
    }

    setCurrentArticles(articles);
  }, [isArticlesLoading, articles]);

  useEffect(() => {
    if (user.email) {
      const myFeedTabElement = (
        <li className="nav-item">
          <Link
            className={`nav-link ${classNames({
              active: feedType === 'your',
            })}`}
            href={{
              query: {
                page: INITIAL_PAGE,
              },
            }}
            onClick={() => {
              setTagFeedTabElement(<></>);
              setFeedType('your');
            }}
          >
            Your Feed
          </Link>
        </li>
      );
      setMyFeedTabElement(myFeedTabElement);
    }
  }, [user, feedType]);

  return (
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
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                {myFeedTabElement}
                <li className="nav-item">
                  <Link
                    className={`nav-link ${classNames({
                      active: feedType === 'global',
                    })}`}
                    href={{
                      query: {
                        page: INITIAL_PAGE,
                      },
                    }}
                    onClick={() => {
                      setTagFeedTabElement(<></>);
                      setFeedType('global');
                    }}
                  >
                    Global Feed
                  </Link>
                </li>
                {tagFeedTabElement}
              </ul>
            </div>

            {isArticlesFetching && isArticlesLoading ? (
              <>Loading articles...</>
            ) : (
              currentArticles && (
                <>
                  {currentArticles.articles.map(
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
                        <Link
                          href={`/article/${slug}`}
                          className="preview-link"
                        >
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
                    totalCounts={currentArticles.articlesCount}
                    page={page}
                    perPage={parseInt(FEED_PER_PAGE)}
                  />
                </>
              )
            )}
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                {!isPopularTagsLoading && popularTags ? (
                  <>
                    {popularTags.tags.map((popularTag) => (
                      <Link
                        key={popularTag}
                        className="tag-pill tag-default"
                        href={{
                          query: {
                            page: INITIAL_PAGE,
                          },
                        }}
                        onClick={() => handlePopularTag(popularTag)}
                      >
                        {popularTag}
                      </Link>
                    ))}
                  </>
                ) : (
                  <>Loading tags...</>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageMain;

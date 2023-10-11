'use client';

import Pagination from '@/composables/Pagination';
import { queryClient } from '@/react-query/queryClient';
import { queryKeys } from '@/react-query/queryKeys';
import { useUserStore } from '@/stores/users';
import { FeedsResponse } from '@/types/api/articles';
import { ProfileResponse } from '@/types/api/profile';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

import { FEED_PER_PAGE, INITIAL_PAGE } from '@/constants/api';

import { useArticlesQuery } from '@/hooks/query/articles/useArticlesQuery';
import {
  useDeleteFavoriteMutation,
  usePostFavoriteMutation,
} from '@/hooks/query/favorites/useFavoritesMutation';
import {
  useDeleteUnFollowUserMutation,
  usePostFollowUserMutation,
} from '@/hooks/query/profile/useProfileMutation';

interface Props {
  profile: ProfileResponse['profile'];
}

const ProfileUserPageMain = ({ profile }: Props) => {
  // server-side fetch (profile 정보)
  // client-side fetch (article 정보) - react query 이용

  const searchParams = useSearchParams();
  const { push: navigate } = useRouter();

  const user = useUserStore((state) => state.user);

  const [currentProfile, setCurrentProfile] =
    useState<Props['profile']>(profile);

  const [profileMenusElement, setProfileMenusElement] = useState<ReactNode>();

  const [articleType, setArticleType] = useState<'my' | 'favorited'>();
  const [page, setPage] = useState<string>(INITIAL_PAGE);

  const [currentArticles, setCurrentArticles] = useState<FeedsResponse | null>(
    null,
  );

  const { username, image, following } = currentProfile ?? profile;

  const perPage = FEED_PER_PAGE;

  const offset = ((parseInt(page) - 1) * parseInt(perPage)).toString();
  const limit = perPage;

  const feedQueryObj =
    articleType === 'my' ? { author: username } : { favorited: username };

  const { data, isLoading } = useArticlesQuery({
    queryStrings: {
      ...feedQueryObj,
      offset,
      limit,
    },
  });

  const { mutate: postFollowMutate, isLoading: isPostFollowLoading } =
    usePostFollowUserMutation();
  const { mutate: deleteUnfollowMutate, isLoading: isDeleteUnfollowLoading } =
    useDeleteUnFollowUserMutation();

  const followUser = (following: boolean) => {
    if (!user.email) {
      navigate('/login');
      return;
    }

    if (following) {
      deleteUnfollowMutate(
        { username },
        {
          onSuccess: (res) => {
            const { profile } = res;
            setCurrentProfile(profile);
          },
        },
      );
    } else {
      postFollowMutate(
        {
          username,
        },
        {
          onSuccess: (res) => {
            const { profile } = res;
            setCurrentProfile(profile);
          },
        },
      );
    }
  };

  const {
    mutate: postFavoriteMutate,
    isLoading: isPostFavoriteMutationLoading,
  } = usePostFavoriteMutation({
    onSuccess: () => queryClient.invalidateQueries([queryKeys.GetArticles]),
  });
  const {
    mutate: deleteFavoriteMutate,
    isLoading: isDeleteFavoriteMutationLoading,
  } = useDeleteFavoriteMutation({
    onSuccess: () => queryClient.invalidateQueries([queryKeys.GetArticles]),
  });

  const favoriteArticle = (slug: string, favorited: boolean) => {
    if (!user.email) {
      navigate('/login');
      return;
    }

    if (favorited) {
      deleteFavoriteMutate({ slug });
      setCurrentArticles((prev) => ({
        articlesCount: prev?.articlesCount ?? 0,
        articles: (prev?.articles ?? []).map((article) =>
          article.slug === slug
            ? {
                ...article,
                favorited: !article.favorited,
                favoritesCount: article.favoritesCount - 1,
              }
            : article,
        ),
      }));
    } else {
      postFavoriteMutate({ slug });
      setCurrentArticles((prev) => ({
        articlesCount: prev?.articlesCount ?? 0,
        articles: (prev?.articles ?? []).map((article) =>
          article.slug === slug
            ? {
                ...article,
                favorited: !article.favorited,
                favoritesCount: article.favoritesCount + 1,
              }
            : article,
        ),
      }));
    }
  };

  useEffect(() => {
    const type = searchParams?.get('type') ?? 'my';

    setArticleType(type as 'my' | 'favorited');
  }, [searchParams]);

  useEffect(() => {
    const page = searchParams?.get('page') ?? INITIAL_PAGE;

    setPage(page);
  }, [searchParams]);

  useEffect(() => {
    if (isLoading || !data) {
      return;
    }

    setCurrentArticles(data);
  }, [isLoading, data]);

  useEffect(() => {
    const profileMenusElement =
      user.username === username ? (
        <button
          className="btn btn-sm btn-outline-secondary action-btn"
          type="button"
          onClick={() => {
            navigate('/settings');
          }}
        >
          <i className="ion-gear-a"></i>
          &nbsp; Edit Profile Settings
        </button>
      ) : (
        <button
          className={`btn btn-sm action-btn ${classNames({
            'btn-secondary': following,
            'btn-outline-secondary': !following,
          })}`}
          type="button"
          onClick={() => followUser(following)}
          disabled={isPostFollowLoading || isDeleteUnfollowLoading}
        >
          <i className="ion-plus-round"></i>
          &nbsp; {following ? 'Unfollow' : 'Follow'} {username}
        </button>
      );

    setProfileMenusElement(profileMenusElement);
  }, [
    following,
    user.username,
    username,
    isPostFollowLoading,
    isDeleteUnfollowLoading,
  ]);

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <Image
                src={image}
                alt={username}
                className="user-img"
                width={100}
                height={100}
              />
              <h4>{username}</h4>
              <p>{profile?.bio}</p>

              {profileMenusElement}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${classNames({
                      active: articleType === 'my',
                    })}`}
                    href={{
                      query: {
                        type: 'my',
                        page: INITIAL_PAGE,
                      },
                    }}
                    onClick={() => setArticleType('my')}
                  >
                    My Articles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${classNames({
                      active: articleType === 'favorited',
                    })}`}
                    href={{
                      query: {
                        type: 'favorited',
                        page: INITIAL_PAGE,
                      },
                    }}
                    onClick={() => setArticleType('favorited')}
                  >
                    Favorited Articles
                  </Link>
                </li>
              </ul>
            </div>
            {currentArticles ? (
              <>
                {currentArticles.articles.length > 0 ? (
                  currentArticles.articles.map(
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
                  )
                ) : (
                  <div className="article-preview">
                    No articles are here... yet.
                  </div>
                )}
                <Pagination
                  totalCounts={currentArticles.articlesCount}
                  page={parseInt(page)}
                  perPage={parseInt(perPage)}
                />
              </>
            ) : (
              <div className="article-preview">Loading articles...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserPageMain;

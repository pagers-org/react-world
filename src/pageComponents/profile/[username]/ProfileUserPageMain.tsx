'use client';

import Pagination from '@/composables/Pagination';
import { useUserStore } from '@/stores/users';
import { ProfileResponse } from '@/types/api/profile';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

import { INITIAL_PAGE } from '@/constants/api';

import { useArticlesQuery } from '@/hooks/query/articles/useArticlesQuery';
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

  const [isFollowLoading, setIsFollowLoading] = useState<boolean>(false);

  const [articleType, setArticleType] = useState<'my' | 'favorited'>();
  const [page, setPage] = useState<number>(1);

  const { username, image, following } = currentProfile ?? profile;

  const perPage = '10';

  const offset = ((Number(page) - 1) * Number(perPage)).toString();
  const limit = perPage;

  const feedQueryObj =
    articleType === 'my' ? { author: username } : { favorited: username };

  const { data, isLoading } = useArticlesQuery({
    ...feedQueryObj,
    offset,
    limit,
  });

  const postFollowUserMutation = usePostFollowUserMutation();
  const deleteUnfollowUserMutation = useDeleteUnFollowUserMutation();

  const handleFollow = (following: boolean) => {
    if (!user.email) {
      navigate('/login');
      return;
    }

    setIsFollowLoading(true);

    if (following) {
      deleteUnfollowUserMutation.mutate(username, {
        onSuccess: (res) => {
          const { profile } = res;
          setCurrentProfile(profile);
        },
        onSettled: () => {
          setIsFollowLoading(false);
        },
      });
    } else {
      postFollowUserMutation.mutate(username, {
        onSuccess: (res) => {
          const { profile } = res;
          setCurrentProfile(profile);
        },
        onSettled: () => {
          setIsFollowLoading(false);
        },
      });
    }
  };

  useEffect(() => {
    const type = searchParams?.get('type') ?? 'my';

    setArticleType(type as 'my' | 'favorited');
  }, [searchParams]);

  useEffect(() => {
    const page = searchParams?.get('page') ?? INITIAL_PAGE;

    setPage(parseInt(page));
  }, [searchParams]);

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
          onClick={() => handleFollow(following)}
          disabled={isFollowLoading}
        >
          <i className="ion-plus-round"></i>
          &nbsp; {following ? 'Unfollow' : 'Follow'} {username}
        </button>
      );

    setProfileMenusElement(profileMenusElement);
  }, [following, isFollowLoading, user.username, username]);

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
            {!isLoading && data ? (
              <>
                {data.articles.length > 0 ? (
                  data.articles.map(
                    ({
                      slug,
                      title,
                      description,
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
                          <button className="btn btn-outline-primary btn-sm pull-xs-right">
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
                  totalCounts={data.articlesCount}
                  page={page}
                  perPage={10}
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

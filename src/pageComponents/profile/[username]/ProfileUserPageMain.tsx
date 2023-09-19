'use client';

import Pagination from '@/composables/Pagination';
import { useUserStore } from '@/stores/users';
import { ProfileResponse } from '@/types/api/profile';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useCurationQuery } from '@/hooks/query/articles/useArticlesQuery';

interface Props {
  profile: ProfileResponse['profile'];
}

const ProfileUserPageMain = ({ profile }: Props) => {
  // client-side fetch - react query 이용

  const searchParams = useSearchParams();

  const user = useUserStore((state) => state.user);

  const [articleType, setArticleType] = useState<'my' | 'favorited'>();
  const [page, setPage] = useState<number>(1);

  const { username, image, following } = profile;

  const perPage = '10';

  const offset = ((Number(page) - 1) * Number(perPage)).toString();
  const limit = perPage;

  const feedQueryObj =
    articleType === 'my' ? { author: username } : { favorited: username };

  const { data, isLoading } = useCurationQuery({
    ...feedQueryObj,
    offset,
    limit,
  });

  useEffect(() => {
    const type = searchParams?.get('type') ?? 'my';

    setArticleType(type as 'my' | 'favorited');
  }, [searchParams]);

  useEffect(() => {
    const page = searchParams?.get('page') ?? '1';

    setPage(parseInt(page));
  }, [searchParams]);

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
              <button
                className={`btn btn-sm action-btn ${classNames({
                  'btn-secondary': !following,
                  'btn-outline-secondary': following,
                })}`}
              >
                <i className="ion-plus-round"></i>
                &nbsp; {following ? 'Follow' : 'Unfollow'} {username}
              </button>
              {user.email === username && (
                <button className="btn btn-sm btn-outline-secondary action-btn">
                  <i className="ion-gear-a"></i>
                  &nbsp; Edit Profile Settings
                </button>
              )}
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
                        page: '1',
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
                        page: '1',
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
                          href="/article/how-to-build-webapps-that-scale"
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

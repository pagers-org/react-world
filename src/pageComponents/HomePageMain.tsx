'use client';

import Pagination from '@/composables/Pagination';
import { useUserStore } from '@/stores/users';
import { FeedsResponse } from '@/types/api/articles';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

interface Props {
  feeds: FeedsResponse;
}

const HomePageMain = ({ feeds }: Props) => {
  // server-side fetch - server component만 이용

  const searchParams = useSearchParams();

  const user = useUserStore((state) => state.user);

  const [feedType, setFeedType] = useState<'your' | 'global'>();
  const [page, setPage] = useState<number>(1);

  const [tabsElement, setTabsElement] = useState<ReactNode>();

  const { articlesCount, articles } = feeds;

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
    const page = searchParams?.get('page') ?? '1';

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
                  page: '1',
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
                page: '1',
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

              {articles.map(
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

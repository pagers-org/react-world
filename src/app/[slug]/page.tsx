'use client';

import { FeedResponseType } from '@/types/article';
import { ProfileResponseType } from '@/types/profile';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import Articles from '@/pageComponents/Articles/Articles';

import { getAuthorArticle, getFavorited } from '@/api/article';

import { cn } from '@/utils/style';

import UserProfile from './components/UserProfile';
import { CurrentTabStyle } from './style';

const ProfilePage = () => {
  const [currentTab, setCurrentTab] = useState<
    'My Articles' | 'Favorited Articles'
  >('My Articles');
  const [favoritedData, setFavoritedData] = useState<
    undefined | FeedResponseType
  >();

  const pathname = usePathname();
  const pathOnlyUserName = pathname?.substring(2);

  const PROFILE_PAGE_TAB = [
    { label: 'My Articles' },
    {
      label: 'Favorited Articles',
    },
  ] as const;

  const fetchFavoritedData = async (slug: string) => {
    try {
      const response = await getFavorited(slug);
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchFavorited = async () => {
      try {
        const data: ProfileResponseType =
          await fetchFavoritedData(pathOnlyUserName);
        setFavoritedData(data);
        // 여기서 data 변수에 접근 가능
      } catch (error) {
        console.error(error);
      }
    };
    if (currentTab === 'Favorited Articles') {
      fetchFavorited();
    }
  }, [currentTab]);

  const [authorData, setAuthorData] = useState<undefined | FeedResponseType>();

  const fetchAuthorData = async (author: string) => {
    try {
      const response = await getAuthorArticle(author);
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const data: FeedResponseType = await fetchAuthorData(pathOnlyUserName);
        setAuthorData(data);
        // 여기서 data 변수에 접근 가능
      } catch (error) {
        console.error(error);
      }
    };
    if (currentTab === 'My Articles') {
      fetchAuthor();
    }
    fetchAuthor();
  }, [currentTab]);

  console.log(favoritedData, authorData);

  return (
    <div className="profile-page">
      {<UserProfile />}
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                {PROFILE_PAGE_TAB.map((tab) => (
                  <li
                    key={tab.label}
                    onClick={() => setCurrentTab(tab.label)}
                    className="nav-item"
                  >
                    <p
                      className={cn(
                        CurrentTabStyle({
                          isCurrentTab: currentTab === tab.label,
                        }),
                      )}
                    >
                      {tab.label}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {authorData && currentTab === 'My Articles' && (
              <Articles articles={authorData} />
            )}
            {favoritedData && currentTab === 'Favorited Articles' && (
              <Articles articles={favoritedData} />
            )}
            <ul className="pagination">
              <li className="page-item active">
                <a className="page-link" href="">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="">
                  2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

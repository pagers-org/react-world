'use client';

import ArticlePreview from './ArticlePreview';
import React, { useRef } from 'react';
import { flexCenter } from '@/styles/common.css';
import useCurrentTab from '@/stores/useCurrentTab';
import useArticles from '@/hooks/useArticles';
import useUserStore from '@/stores/useUserStore';
import { User } from '@/types';
type Props = {
  username: string;
};
const ArticleList = ({ username }: Props) => {
  const targetRef = useRef(null);
  // const { username } = useUserStore() as User;
  const { tab } = useCurrentTab();
  const { data } = useArticles(targetRef, tab, username);

  return (
    <div>
      {data?.pages?.at(0)?.articles?.length === 0 ? (
        '데이터가 없습니다.'
      ) : (
        <div>
          {data?.pages.map((group, i) => (
            <div key={i}>
              {group?.articles?.map(article => <ArticlePreview key={article.slug} article={article} />)}
            </div>
          ))}
        </div>
      )}
      <div className={flexCenter} ref={targetRef}></div>
    </div>
  );
};

export default ArticleList;

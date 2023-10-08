'use client';

import ArticlePreview from './ArticlePreview';
import React, { useRef } from 'react';
import { flexCenter } from '@/styles/common.css';
import useCurrentTab from '@/stores/useCurrentTab';
import useArticles from '@/hooks/useArticles';
type Props = {
  username?: string;
};
const ArticleList = ({ username }: Props) => {
  const targetRef = useRef(null);
  const { tab } = useCurrentTab();
  const { articlesData } = useArticles({ targetRef, tab, username });

  return (
    <div>
      {articlesData?.pages?.at(0)?.articles?.length === 0 ? (
        '데이터가 없습니다.'
      ) : (
        <div>
          {articlesData?.pages.map((group, i) => (
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

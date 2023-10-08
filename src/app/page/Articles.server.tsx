import React, { Suspense } from 'react';

import { ArticleSummary } from '@/components';
import { ArticlesApi } from '@/gen';

const articleApi = new ArticlesApi();

export async function Articles() {
  const articles = (await articleApi.getArticles()).articles;

  return (
    <Suspense>
      <section>
        {articles.map((article) => {
          return (
            <ArticleSummary
              key={`${article.title}-${article.author}-${article.createdAt}`}
              article={article}
            />
          );
        })}
      </section>
    </Suspense>
  );
}

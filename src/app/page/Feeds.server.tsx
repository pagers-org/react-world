import React, { Suspense } from 'react';

import { FeedSummary } from '@/components';
import { ArticlesApi } from '@/gen';

const articleApi = new ArticlesApi();

export async function Feeds() {
  const feeds = (await articleApi.getArticles()).articles;

  return (
    <Suspense>
      <section>
        {feeds.map((feed) => {
          return (
            <FeedSummary
              key={`${feed.title}-${feed.author}-${feed.createdAt}`}
              feed={feed}
            />
          );
        })}
      </section>
    </Suspense>
  );
}

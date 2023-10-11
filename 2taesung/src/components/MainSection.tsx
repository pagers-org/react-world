import FeedToggle from './FeedToggle';
import Item from './Item';
import Loading from './Loading';
import Pagination from './Pagination';
import Sidebar from './Sidebar';

import { Article } from '@/types';

import { Suspense } from 'react';

export default async function MainSection({
  articleList,
  pageNums,
}: {
  articleList: Array<Article>;
  pageNums: Array<number>;
}) {
  return (
    <div className="container page">
      <div className="row">
        <div className="col-md-9">
          <FeedToggle />
          <Suspense fallback={<Loading />}>
            {articleList.map(article => {
              return <Item key={article.slug} article={article} />;
            })}
          </Suspense>
          <Pagination pageNums={pageNums} />
        </div>
        <div className="col-md-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

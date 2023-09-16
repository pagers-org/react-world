import { Pagination } from 'components/ui';
import { FeedItem } from './feed-item';

export const FeedList = () => {
  return (
    <>
      <ul className="p-0">
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
      </ul>
      <Pagination total={20} />
    </>
  );
};

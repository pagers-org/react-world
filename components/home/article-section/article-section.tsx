import { Tabs } from 'components/ui';
import { FeedList } from '../feed-list';
import { clsx } from 'lib/utils';

export const ArticleSection = () => {
  const tabs = [
    {
      key: 'feed',
      label: 'Your Feed',
    },
    {
      key: 'all',
      label: 'Global Feed',
    },
  ];

  return (
    <div className="feed-toggle">
      <Tabs.Root defaultValue="all">
        <Tabs.List>
          {tabs.map((tab) => (
            <Tabs.Trigger key={tab.key} value={tab.key} className="nav-link">
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <Tabs.Content value="feed">
          <div className={clsx('pt-[24px]', 'pb-[24px]')}>No articles are here... yet</div>
        </Tabs.Content>

        <Tabs.Content value="all">
          <FeedList />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

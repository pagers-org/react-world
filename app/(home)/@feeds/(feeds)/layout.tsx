import { ReactNode } from 'react';

import { Tabs } from 'components/ui';
import { clsx } from 'lib/utils';

type Props = {
  global: ReactNode;
};

const FeedsLayout = ({ global }: Props) => {
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

        <Tabs.Content value="all">{global}</Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default FeedsLayout;

'use client';
import useCurrentTab from '@/stores/useCurrentTab';
import useUserStore from '@/stores/useUserStore';
import { articleTab, articleTabItem, articleTabItemActivate, articleTabItemDisable } from '@/styles/article.css';
import { User } from '@/types';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const TABS = ['global', 'your', 'my', 'favorited'];

const ArticleTab = () => {
  const { email } = useUserStore() as User;
  const pathname = usePathname();
  const { tab, setTab } = useCurrentTab();
  const isProfile = pathname.includes('@');

  const handleTabClick = (tab: string) => {
    setTab(tab);
  };

  useEffect(() => {
    if (pathname.includes('@')) {
      setTab('my');
    }

    return () => {
      setTab('global');
    };
  }, []);

  return (
    <ul className={articleTab}>
      {email && isProfile && (
        <li
          className={`${articleTabItem} ${tab === 'my' ? articleTabItemActivate : articleTabItemDisable}`}
          onClick={() => handleTabClick('my')}
        >
          My Articles
        </li>
      )}
      {email && isProfile && (
        <li
          className={`${articleTabItem} ${tab === 'favorited' ? articleTabItemActivate : articleTabItemDisable}`}
          onClick={() => handleTabClick('favorited')}
        >
          Favorited Articles
        </li>
      )}
      {email && !isProfile && (
        <li
          className={`${articleTabItem} ${tab === 'your' ? articleTabItemActivate : articleTabItemDisable}`}
          onClick={() => handleTabClick('your')}
        >
          Your Feed
        </li>
      )}
      {email && !isProfile && (
        <li
          className={`${articleTabItem} ${tab === 'global' ? articleTabItemActivate : articleTabItemDisable}`}
          onClick={() => handleTabClick('global')}
        >
          Global Feed
        </li>
      )}

      {!TABS.includes(tab) && <li className={`${articleTabItem} ${articleTabItemActivate}`}># {tab}</li>}
    </ul>
  );
};

export default ArticleTab;

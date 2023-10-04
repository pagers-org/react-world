'use client';
import useCurrentTab from '@/stores/useCurrentTab';
import useUserStore from '@/stores/useUserStore';
import { articleTab, articleTabItem, articleTabItemActivate, articleTabItemDisable } from '@/styles/article.css';
import { User } from '@/types';

const ArticleTab = () => {
  const { email } = useUserStore() as User;
  const { tab, setTab } = useCurrentTab();

  const handleTabClick = (tab: string) => {
    setTab(tab);
  };

  return (
    <ul className={articleTab}>
      {email && (
        <li
          className={`${articleTabItem} ${tab === 'your' ? articleTabItemActivate : articleTabItemDisable}`}
          onClick={() => handleTabClick('your')}
        >
          Your Feed
        </li>
      )}
      <li
        className={`${articleTabItem} ${tab === 'global' ? articleTabItemActivate : articleTabItemDisable}`}
        onClick={() => handleTabClick('global')}
      >
        Global Feed
      </li>
      {tab !== 'global' && tab !== 'your' && <li className={`${articleTabItem} ${articleTabItemActivate}`}># {tab}</li>}
    </ul>
  );
};

export default ArticleTab;

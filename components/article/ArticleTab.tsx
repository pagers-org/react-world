'use client';
import useCurrentTag from '@/stores/useCurrentTag';
import { articleTab, articleTabItem, articleTabItemActivate, articleTabItemDisable } from '@/styles/article.css';

const ArticleTab = () => {
  const user = false;
  const { tag } = useCurrentTag();

  return (
    <ul className={articleTab}>
      {user && <li className={`${articleTabItem} ${articleTabItemDisable}`}>Your Feed</li>}
      <li className={`${articleTabItem} ${articleTabItemActivate}`}>Global Feed</li>
      {tag && <li className={`${articleTabItem} ${articleTabItemDisable}`}># {tag}</li>}
    </ul>
  );
};

export default ArticleTab;

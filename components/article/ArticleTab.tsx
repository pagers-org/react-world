import { articleTab, articleTabItem, articleTabItemActivate, articleTabItemDisable } from '@/styles/article.css';

const ArticleTab = () => {
  const user = false;
  return (
    <ul className={articleTab}>
      {user && <li className={`${articleTabItem} ${articleTabItemDisable}`}>Your Feed</li>}
      <li className={`${articleTabItem} ${articleTabItemActivate}`}>Global Feed</li>
      {user && <li className={`${articleTabItem} ${articleTabItemDisable}`}># {}</li>}
    </ul>
  );
};

export default ArticleTab;

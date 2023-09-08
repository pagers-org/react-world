import { articleTab, articleTabItem, articleTabItemActivate, articleTabItemDisable } from '@/styles/article.css';

const ArticleTab = () => {
  return (
    <ul className={articleTab}>
      {<li className={`${articleTabItem} ${articleTabItemDisable}`}>Your Feed</li>}
      <li className={`${articleTabItem} ${articleTabItemActivate}`}>Global Feed</li>
      <li className={`${articleTabItem} ${articleTabItemDisable}`}>tag Feed</li>
    </ul>
  );
};

export default ArticleTab;

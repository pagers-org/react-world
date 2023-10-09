import ItemMeta from './ItemMeta';

import { Article } from '@/types';

import Link from 'next/link';

export default function Item({ article }: { article: Article }) {
  return (
    <div className="article-preview">
      <ItemMeta author={article.author} createdAt={article.createdAt} />
      <Link href="" className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {article.tagList.map(tag => {
            return (
              <li className="tag-default tag-pill tag-outline" key={tag}>
                {tag}
              </li>
            );
          })}
        </ul>
      </Link>
    </div>
  );
}

import { Article, Author } from '@/types';

import Image from 'next/image';
import Link from 'next/link';

type ItemMetaProps = {
  author: Author;
} & Pick<Article, 'createdAt'>;

export default function ItemMeta({ author, createdAt }: ItemMetaProps) {
  return (
    <div className="article-meta">
      <Link href="/profile/eric-simons">
        <Image width={32} height={32} src={author.image} alt="author" />
      </Link>
      <div className="info">
        <Link href="/profile/eric-simons" className="author">
          {author.username}
        </Link>
        <span className="date">{createdAt}</span>
      </div>
      <button className="btn btn-outline-primary btn-sm pull-xs-right">
        <i className="ion-heart" /> 29
      </button>
    </div>
  );
}

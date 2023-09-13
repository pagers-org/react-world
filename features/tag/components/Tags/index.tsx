'use client';

import { useGetTagListQuery } from '@/features/tag/hooks/useGetTagListQuery';

import * as styles from './index.css';

export default function Tags() {
  const { data } = useGetTagListQuery();

  return (
    <>
      <div>popular tags</div>
      <ul className={styles.chipWrapper}>
        {data?.tags.map((tag) => {
          return (
            <li key={tag} className={styles.chip}>
              {tag}
            </li>
          );
        })}
      </ul>
    </>
  );
}

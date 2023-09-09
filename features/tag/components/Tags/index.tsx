'use client';

import { useQuery } from '@tanstack/react-query';

import { tagApiService } from '@/features/tag/services/TagApiService';

import * as styles from './index.css';

export default function Tags() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['tags'],
    queryFn: () => tagApiService.getTags(),
  });

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <ul className={styles.chipWrapper}>
      {data.tags.map((tag) => {
        return (
          <li key={tag} className={styles.chip}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
}

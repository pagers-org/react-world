'use client';

import { Tag } from '@packages/ui';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ClickToMoveTagProps {
  label: string;
}

const ClickToMoveTag = ({ label }: ClickToMoveTagProps) => {
  const { push } = useRouter();

  const handleClickTag = () => {
    push(`?tag=${label}`, { scroll: false });
  };

  return (
    <li className="hover:cursor-pointer" onClick={handleClickTag}>
      <Tag label={label} variant={'pill'} />
    </li>
  );
};

export default ClickToMoveTag;

'use client';

import { Tag } from '@packages/ui';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ClickToMoveTagProps {
  label: string;
  onClick: () => void;
}

const ClickToMoveTag = ({ label, onClick }: ClickToMoveTagProps) => {
  return (
    <li className="hover:cursor-pointer" onClick={onClick}>
      <Tag label={label} variant={'pill'} />
    </li>
  );
};

export default ClickToMoveTag;

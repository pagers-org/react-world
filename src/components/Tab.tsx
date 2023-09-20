import { TAB } from '@/constants';
import { ReactNode } from 'react';
import React from 'react';

import * as styles from './Tab.css';

interface Props {
  children: ReactNode;
  handleRefetch: (
    event: React.MouseEvent<HTMLButtonElement>,
    tabValue: typeof TAB.MY_FEED | typeof TAB.GLOBAL,
  ) => void;
  tabValue: typeof TAB.MY_FEED | typeof TAB.GLOBAL;
  isSelected: null | boolean;
}

export default function Tab({
  children,
  handleRefetch,
  tabValue,
  isSelected,
}: Props) {
  return (
    <ul className="tabs">
      <button
        className={
          isSelected ? styles.selectedTabItem : styles.notSelectedTabItem
        }
        name={String(children)}
        onClick={(e) => handleRefetch(e, tabValue)}
      >
        {children}
      </button>
    </ul>
  );
}

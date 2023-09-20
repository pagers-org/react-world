import { TAB } from '@/constants';
import React from 'react';

import * as styles from './Tab.css';

interface Props {
  handleRefetch: (tabValue: typeof TAB.MY_FEED | typeof TAB.GLOBAL) => void;
  tabValue: typeof TAB.MY_FEED | typeof TAB.GLOBAL;
  isSelected: boolean;
  label: string;
}

export default function Tab({
  handleRefetch,
  tabValue,
  isSelected,
  label,
}: Props) {
  return (
    <ul className="tabs">
      <button
        className={
          isSelected ? styles.selectedTabItem : styles.notSelectedTabItem
        }
        onClick={() => handleRefetch(tabValue)}
      >
        {label}
      </button>
    </ul>
  );
}

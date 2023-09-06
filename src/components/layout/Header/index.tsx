import { PropsWithChildren } from 'react';

import * as styles from '@/src/components/layout/Header/index.css';

export default function Header({ children }: PropsWithChildren) {
  return <header className={styles.header}>{children}</header>;
}

function Left({ children }: PropsWithChildren) {
  return <div className={styles.headerLeft}>{children}</div>;
}

function Right({ children }: PropsWithChildren) {
  return <div className={styles.headerRight}>{children}</div>;
}

Header.Left = Left;
Header.Right = Right;

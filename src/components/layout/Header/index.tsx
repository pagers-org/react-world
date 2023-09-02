import { PropsWithChildren } from 'react';

import {
  header,
  headerLeft,
  headerRight,
} from '@/src/components/layout/Header/index.css';

export default function Header({ children }: PropsWithChildren) {
  return <header className={header}>{children}</header>;
}

function Left({ children }: PropsWithChildren) {
  return <div className={headerLeft}>{children}</div>;
}

function Right({ children }: PropsWithChildren) {
  return <div className={headerRight}>{children}</div>;
}

Header.Left = Left;
Header.Right = Right;

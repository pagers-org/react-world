import { PropsWithChildren } from 'react';
import * as styles from './Tab.css';
export default function Tab({
  children,
  onClick,
}: PropsWithChildren<{ onClick: () => void }>) {
  return (
    <ul className="tabs">
      <button className={styles.tabItem} onClick={onClick}>
        {children}
      </button>
    </ul>
  );
}

import { PropsWithChildren } from 'react';
import * as styles from './Tab.css';
export default function Tab({
  children,
  handleRefetch,
}: PropsWithChildren<{ handleRefetch: () => void }>) {
  return (
    <ul className="tabs">
      <button className={styles.tabItem} onClick={handleRefetch}>
        {children}
      </button>
    </ul>
  );
}

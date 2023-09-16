import { ReactNode } from 'react';
import classNames from 'classnames';

import * as styles from '@/src/components/layout/Banner/index.css';

interface Props {
  title: string;
  description?: string;
  background?: keyof typeof styles.background;
  children?: ReactNode;
}

export default function Banner({
  title,
  description,
  background = 'primary',
  children,
}: Props) {
  return (
    <div
      className={classNames(
        styles.bannerContainer,
        styles.background[background],
      )}
    >
      <div className={styles.bannerContent}>
        <div className={styles.bannerTitle}>{title}</div>
        <p className={styles.bannerDescription}>{description}</p>
        {children}
      </div>
    </div>
  );
}

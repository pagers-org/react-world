import { PropsWithChildren } from 'react';
import classNames from 'classnames';

import * as styles from '@/src/components/layout/Banner/index.css';

interface Props extends PropsWithChildren {
  title: string;
  description?: string;
  background: keyof typeof styles.background;
}

export default function Banner({
  title,
  description,
  background,
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

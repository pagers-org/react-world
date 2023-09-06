import { PropsWithChildren } from 'react';
import classNames from 'classnames';

import {
  bannerContainer,
  bannerContent,
  bannerDescription,
  bannerTitle,
  primary,
  secondary,
} from '@/src/components/layout/Banner/index.css';

interface Props extends PropsWithChildren {
  style?: 'primary' | 'secondary';
  title: string;
  description?: string;
}

export default function Banner({
  style = 'primary',
  title,
  description,
  children,
}: Props) {
  return (
    <div
      className={classNames(bannerContainer, {
        [primary]: style === 'primary',
        [secondary]: style === 'secondary',
      })}
    >
      <div className={bannerContent}>
        <div className={bannerTitle}>{title}</div>
        <p className={bannerDescription}>{description}</p>
        {children}
      </div>
    </div>
  );
}

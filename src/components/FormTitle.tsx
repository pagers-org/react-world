import Link from 'next/link';
import React from 'react';

import * as styles from './FormTitle.css';

interface Props {
  title: string;
  subTitle: string;
  href: string;
}

export const FormTitle = ({ title, subTitle, href }: Props) => (
  <>
    <p className={styles.title}>{title}</p>
    <Link href={href}>
      <p className={styles.subTitle}>{subTitle}</p>
    </Link>
  </>
);

'use client';

import { PropsWithChildren } from 'react';
import { useTabsRootContext } from './root.hooks';

type Props = {
  value: string;
};

export const Content = ({ value, children }: PropsWithChildren<Props>) => {
  const { currentValue } = useTabsRootContext();

  if (value !== currentValue) {
    return null;
  }

  return <>{children}</>;
};

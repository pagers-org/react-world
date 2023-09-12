'use client';

import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { clsx } from 'lib/utils';

type Props = ComponentPropsWithoutRef<'ul'>;

export const List = forwardRef<HTMLUListElement, Props>(function List({ children, className, ...otherProps }, ref) {
  return (
    <ul ref={ref} {...otherProps} className={clsx('nav nav-pills outline-active', className)}>
      {children}
    </ul>
  );
});

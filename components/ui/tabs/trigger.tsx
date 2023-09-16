'use client';

import { clsx } from 'lib/utils';
import { ComponentPropsWithoutRef, MouseEventHandler, forwardRef } from 'react';
import { useTabsRootContext } from './root.hooks';

type TriggerProps = {
  value: string;
};

type Props = ComponentPropsWithoutRef<'li'> & TriggerProps;

export const Trigger = forwardRef<HTMLLIElement, Props>(function Trigger(
  { value, children, className, onClick, ...otherProps },
  ref,
) {
  const { currentValue, onValueChange } = useTabsRootContext();

  const handleClick: MouseEventHandler<HTMLLIElement> = (event) => {
    onClick?.(event);
    onValueChange(value);
  };

  return (
    <li
      ref={ref}
      {...otherProps}
      className={clsx('nav-item', { active: value === currentValue }, className)}
      onClick={handleClick}
    >
      {children}
    </li>
  );
});

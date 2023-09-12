import { clsx } from 'lib/utils';
import Image from 'next/image';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

type Props = ComponentPropsWithoutRef<typeof Image>;

export const Avatar = forwardRef<HTMLImageElement, Props>(function Avatar(
  { children, width = 32, height = 32, alt, className, ...otherProps },
  ref,
) {
  return (
    <Image
      ref={ref}
      {...otherProps}
      width={width}
      height={height}
      alt={alt ?? 'avatar'}
      className={clsx('rounded-full', className)}
    >
      {children}
    </Image>
  );
});

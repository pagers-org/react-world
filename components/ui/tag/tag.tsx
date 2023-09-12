import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { clsx } from 'lib/utils';

type TagVariant = 'default' | 'pill';

type TagColor = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';

type TagProps = {
  variant: TagVariant;
  color: TagColor;
  outline: boolean;
};

type Props = ComponentPropsWithoutRef<'span'> & Partial<TagProps>;

export const Tag = forwardRef<HTMLSpanElement, Props>(function Tag(
  { variant = 'pill', color = 'default', outline = false, children, className, ...otherProps },
  ref,
) {
  return (
    <span
      ref={ref}
      {...otherProps}
      className={clsx(`tag-${variant}`, `tag-${color}`, { 'tag-outline': outline }, className)}
    >
      {children}
    </span>
  );
});

import * as React from 'react';

import { cn } from '@/lib/utils';
import { badgeVariants } from './Badge.styles';
import { BadgeProps } from './Badge.type';

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

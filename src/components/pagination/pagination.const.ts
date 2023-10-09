import { noop } from '@/utils';

export const 페이지네이션_기본_옵션 = {
  onClick: noop,
  pages: 1,
  maxPages: 10,
  showDisabled: true,
  showFirst: true,
  showPrev: true,
  showNext: true,
  showLast: true,
  firstContent: '|<',
  prevContent: '<',
  nextContent: '>',
  lastContent: '>|',
} as const;

import { 페이지네이션_기본_옵션 } from './pagination.const';
import type { NormalizeOptionTypes } from './pagination.types';

export const normalizeOption = ({ key, value, page, pages }: NormalizeOptionTypes) =>
  typeof value === 'boolean'
    ? value
    : typeof value === 'function'
    ? value(Number(page), Number(pages))
    : 페이지네이션_기본_옵션[key];

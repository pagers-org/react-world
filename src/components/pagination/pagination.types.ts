import type { Accessor, JSX, Setter } from 'solid-js';
import { MaybeAccessor } from '@global/solid-util-types';

export type PaginationProps = {
  'aria-current'?: boolean;
  disabled?: boolean;
  onClick?: JSX.EventHandlerUnion<HTMLButtonElement | HTMLAnchorElement, MouseEvent>;
  children: JSX.Element;
  /** page number this refers to, not enumerable, allows to use props.page to get the page number */
  readonly page?: number;
}[];

export type PaginationOptions = {
  onClick?: (page: number) => void;
  /** the overall number of pages */
  pages: number;
  /** the highest number of pages to show at the same time */
  maxPages: number;
  /** start with another page than `1` */
  initialPage?: number;
  /** show an element for the first page */
  showFirst?: boolean | ((page: number, pages: number) => boolean);
  /** show an element for the previous page */
  showPrev?: boolean | ((page: number, pages: number) => boolean);
  /** show an element for the next page */
  showNext?: boolean | ((page: number, pages: number) => boolean);
  /** show an element for the last page */
  showLast?: boolean | ((page: number, pages: number) => boolean);
  /** content for the first page element, e.g. an SVG icon, default is "|<" */
  firstContent?: JSX.Element;
  /** content for the previous page element, e.g. an SVG icon, default is "<" */
  prevContent?: JSX.Element;
  /** content for the next page element, e.g. an SVG icon, default is ">" */
  nextContent?: JSX.Element;
  /** content for the last page element, e.g. an SVG icon, default is ">|" */
  lastContent?: JSX.Element;
};

export type NormalizeOptionTypes = {
  key: 'showFirst' | 'showPrev' | 'showNext' | 'showLast';
  value: PaginationOptions['showFirst' | 'showPrev' | 'showNext' | 'showLast'];
  page: number;
  pages: number;
};

export type CreatePaginationFunc = (
  options?: MaybeAccessor<PaginationOptions>,
) => [props: Accessor<PaginationProps>, page: Accessor<number>, setPage: Setter<number>];

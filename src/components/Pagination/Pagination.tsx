import { type Component, createEffect, For } from 'solid-js';
import { createPagination } from './Pagination.hooks';
import type { PaginationOptions } from './Pagination.types';

export const Pagination: Component<PaginationOptions> = (props) => {
  const [paginationProps, page, setPage] = createPagination({ ...props });

  createEffect(() => {
    page();
  });

  return (
    <nav>
      <ul class="pagination cursor-pointer">
        <For each={paginationProps()}>
          {(pageProps) => (
            <li class={page() === pageProps.page ? 'page-item active' : 'page-item'}>
              <a class="page-link" {...pageProps} />
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
};

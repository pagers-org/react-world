import { type Component, createEffect, For } from 'solid-js';
import { createPagination } from './pagination.hooks';
import type { PaginationOptions } from './pagination.types';

export const Pagination: Component<PaginationOptions> = (props) => {
  const [paginationProps, page] = createPagination({ ...props });

  createEffect(() => {
    page();
  });

  return (
    <nav class="pagination-container">
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

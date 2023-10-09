import { type Component, createEffect, For } from 'solid-js';
import { PaginationContainer } from '@/components/pagination/pagination.css';
import { createPagination } from './pagination.hooks';
import type { PaginationOptions } from './pagination.types';

export const Pagination: Component<PaginationOptions> = (props) => {
  const [paginationProps, page] = createPagination({ ...props });

  createEffect(() => {
    page();
  });

  return (
    <nav class={PaginationContainer} aria-label="Page navigation">
      <ul class="pagination">
        <For each={paginationProps()}>
          {(pageProps) => (
            <li role="button" class={page() === pageProps.page ? 'page-item active' : 'page-item'}>
              <a class="page-link" {...pageProps} />
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
};

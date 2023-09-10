import { createResource, For, Show } from 'solid-js';
import { getTagList } from '@/api/tags';
import { LoadingSpinner, LoadingSpinnerContainer } from '@/components/loading-spinner';

export const Sidebar = () => {
  const [data] = createResource(getTagList);
  return (
    <div class="col-md-3 sidebar-container">
      <div class="sidebar">
        <p>Popular Tags</p>

        <Show
          when={!data.loading}
          fallback={
            <div class={LoadingSpinnerContainer}>
              <LoadingSpinner size="50px" />
            </div>
          }
        >
          <div class="tag-list">
            <For each={data()?.tags}>
              {(tag) => (
                <a href="" class="tag-pill tag-default">
                  {tag}
                </a>
              )}
            </For>
          </div>
        </Show>
      </div>
    </div>
  );
};

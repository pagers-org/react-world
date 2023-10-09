import { createResource, For, Show } from 'solid-js';
import { getTagList } from '@/api/tags';
import { LoadingSpinner } from '@/components/loading-spinner';
import { SidebarContainer, SidebarHeadLine, SidebarTag, SidebarTagList } from './sidebar.css';

export const Sidebar = () => {
  const [data] = createResource(getTagList);
  return (
    <div class="col-md-3">
      <div class={SidebarContainer}>
        <span class={SidebarHeadLine}>인기 태그들</span>

        <Show when={!data.loading} fallback={<LoadingSpinner size="50px" />}>
          <div class={SidebarTagList}>
            <For each={data()?.tags}>
              {(tag) => (
                <a href="" class={SidebarTag}>
                  #{tag}
                </a>
              )}
            </For>
          </div>
        </Show>
      </div>
    </div>
  );
};

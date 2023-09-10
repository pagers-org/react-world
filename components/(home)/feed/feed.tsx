import { Pagination } from "components/shared/ui/pagination";
import { Tabs } from "components/shared/ui/tabs";

import { ArticleListItem } from "../article-list-item";

export const Feed = () => {
  return (
    <div className="pt-4">
      <Tabs.Root defaultValue="2">
        <Tabs.List>
          <Tabs.Trigger value="1">Your Feed</Tabs.Trigger>
          <Tabs.Trigger value="2">Global Feed</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="1">
          <ArticleListItem />
        </Tabs.Content>

        <Tabs.Content value="2">
          <ArticleListItem />
          <ArticleListItem />
          <ArticleListItem />
          <ArticleListItem />
          <ArticleListItem />
        </Tabs.Content>
      </Tabs.Root>

      <div className="flex w-full justify-center py-10">
        <Pagination total={10} currentPage={1} />
      </div>
    </div>
  );
};

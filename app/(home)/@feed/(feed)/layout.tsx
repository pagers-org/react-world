import type { PropsWithChildren, ReactNode } from "react";

import { Tabs } from "components/shared/ui/tabs";

const enum FeedType {
  GLOBAL = "global",
  FOLLOWING = "following",
}

type Props = {
  global: ReactNode;
  following: ReactNode;
};

const FeedLayout = ({ global, following }: PropsWithChildren<Props>) => {
  return (
    <Tabs.Root defaultValue={FeedType.GLOBAL}>
      <Tabs.List>
        <Tabs.Trigger value={FeedType.FOLLOWING}>Following Feed</Tabs.Trigger>
        <Tabs.Trigger value={FeedType.GLOBAL}>Global Feed</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value={FeedType.FOLLOWING}>{following}</Tabs.Content>
      <Tabs.Content value={FeedType.GLOBAL}>{global}</Tabs.Content>
    </Tabs.Root>
  );
};

export default FeedLayout;

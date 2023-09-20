"use client";

import type { PropsWithChildren, ReactNode } from "react";

import { Tabs } from "components/shared/ui/tabs";
import { useQueryParams } from "hooks/use-query-params";

const enum FeedType {
  GLOBAL = "global",
  FOLLOWING = "following",
  POPULAR = "popular",
}

type Props = {
  global: ReactNode;
  following: ReactNode;
  popular: ReactNode;
};

const FeedLayout = ({ global, following, popular }: PropsWithChildren<Props>) => {
  const {
    query: { tag },
    remove,
  } = useQueryParams<{ tag: string }>();

  const value = tag ? FeedType.POPULAR : undefined;

  const handleChange = (value: string) => {
    if (value !== FeedType.POPULAR) {
      remove("tag");
    }
  };

  return (
    <Tabs.Root defaultValue={FeedType.GLOBAL} value={value} onValueChange={handleChange}>
      <Tabs.List>
        <Tabs.Trigger value={FeedType.FOLLOWING}>Following Feed</Tabs.Trigger>
        <Tabs.Trigger value={FeedType.GLOBAL}>Global Feed</Tabs.Trigger>
        {tag ? <Tabs.Trigger value={FeedType.POPULAR}># {tag}</Tabs.Trigger> : null}
      </Tabs.List>

      <Tabs.Content value={FeedType.FOLLOWING}>{following}</Tabs.Content>
      <Tabs.Content value={FeedType.GLOBAL}>{global}</Tabs.Content>
      <Tabs.Content value={FeedType.POPULAR}>{popular}</Tabs.Content>
    </Tabs.Root>
  );
};

export default FeedLayout;

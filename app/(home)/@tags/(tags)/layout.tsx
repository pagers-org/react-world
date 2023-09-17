import type { PropsWithChildren } from "react";

import { Sidebar } from "components/shared/ui/sidebar";
import { HEADER_HEIGHT } from "constants/header";

const TAGS_TOP = 52;
const TAGS_STICKY_OFFSET = TAGS_TOP + HEADER_HEIGHT;

const TagsLayout = ({ children }: PropsWithChildren) => {
  return (
    <Sidebar.Root align="right" top={TAGS_TOP}>
      <Sidebar.Sticky offset={TAGS_STICKY_OFFSET}>
        <Sidebar.Content>
          <Sidebar.Title>Popular Tags</Sidebar.Title>

          {children}
        </Sidebar.Content>
      </Sidebar.Sticky>
    </Sidebar.Root>
  );
};

export default TagsLayout;

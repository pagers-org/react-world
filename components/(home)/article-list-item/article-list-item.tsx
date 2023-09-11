import Link from "next/link";

import { IoHeartOutline } from "react-icons/io5";

import { Avatar } from "components/shared/ui/avatar";
import { Button } from "components/shared/ui/button";
import { ListItem } from "components/shared/ui/list-item";
import { Tags } from "components/shared/ui/tags";

export const ArticleListItem = () => {
  return (
    <ListItem.Root>
      <div className="mb-2 flex items-center justify-between">
        <Link href="/profile/eric-simons">
          <Avatar.Root>
            <Avatar.Image src="http://i.imgur.com/Qr71crq.jpg" alt="" />

            <Avatar.Info>
              <Avatar.Name>Eric Simons</Avatar.Name>

              <Avatar.Description>January 20th</Avatar.Description>
            </Avatar.Info>
          </Avatar.Root>
        </Link>

        <Button variant="secondary" icon={<IoHeartOutline />}>
          29
        </Button>
      </div>

      <Link href="/article/how-to-build-webapps-that-scale">
        <ListItem.Content>
          <ListItem.Title>How to build webapps that scale</ListItem.Title>

          <ListItem.Description>This is the description for the post.</ListItem.Description>

          <div className="mt-2 flex w-full items-center justify-between">
            <span className="text-xs font-light text-zinc-600">Read more...</span>

            <Tags.Root>
              <Tags.Item variant="secondary">realworld</Tags.Item>
              <Tags.Item variant="secondary">implementations</Tags.Item>
            </Tags.Root>
          </div>
        </ListItem.Content>
      </Link>
    </ListItem.Root>
  );
};

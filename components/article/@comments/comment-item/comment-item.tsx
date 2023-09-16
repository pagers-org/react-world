import Link from "next/link";

import { Avatar } from "components/shared/ui/avatar";
import { ListItem } from "components/shared/ui/list-item";

export const CommentItem = () => {
  return (
    <ListItem.Root>
      <div className="mb-4 flex items-center justify-between">
        <Link href="/profile/eric-simons">
          <Avatar.Root>
            <Avatar.Image src="http://i.imgur.com/Qr71crq.jpg" alt="" />

            <Avatar.Info>
              <Avatar.Name>Eric Simons</Avatar.Name>
              <Avatar.Bio>9 months ago</Avatar.Bio>
            </Avatar.Info>
          </Avatar.Root>
        </Link>
      </div>

      <ListItem.Content>
        <ListItem.Description className="text-zinc-900">
          With supporting text below as a natural lead-in to additional content.
        </ListItem.Description>
      </ListItem.Content>
    </ListItem.Root>
  );
};

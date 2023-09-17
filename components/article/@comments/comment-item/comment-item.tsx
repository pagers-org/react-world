import Link from "next/link";

import { useMemo } from "react";

import { Avatar } from "components/shared/ui/avatar";
import { ListItem } from "components/shared/ui/list-item";
import { RelativeFormatter } from "lib/date-formatter/relative-formatter";
import type { Comment } from "models/comment";

type Props = {
  comment: Comment;
};

export const CommentItem = ({ comment }: Props) => {
  const { author, body, createdAt } = comment;

  const { image, username } = author;

  const relativeTime = useMemo(() => new RelativeFormatter(new Date()).format(createdAt), [createdAt]);

  return (
    <ListItem.Root>
      <div className="mb-4 flex items-center justify-between">
        <Link href={`/profile/${username}`}>
          <Avatar.Root>
            <Avatar.Image src={image} alt={image} />

            <Avatar.Info>
              <Avatar.Name>{username}</Avatar.Name>
              <Avatar.Bio>{relativeTime}</Avatar.Bio>
            </Avatar.Info>
          </Avatar.Root>
        </Link>
      </div>

      <ListItem.Content>
        <ListItem.Description className="text-zinc-900">{body}</ListItem.Description>
      </ListItem.Content>
    </ListItem.Root>
  );
};

import Link from "next/link";

import { IoHeart, IoHeartOutline, IoPersonAddOutline, IoPersonRemoveOutline } from "react-icons/io5";

import { Avatar } from "components/shared/ui/avatar";
import { Button } from "components/shared/ui/button";
import type { RichArticle } from "models/article";

type Props = {
  article: Pick<RichArticle, "author" | "favorited" | "favoritesCount">;
};

export const Author = ({ article }: Props) => {
  const { author, favorited, favoritesCount } = article;

  const { image, username, bio, following } = author;

  return (
    <div className="my-1 flex items-center justify-center gap-7">
      <Link href={`/profile/${username}`}>
        <Avatar.Root>
          <Avatar.Image src={image} alt="" />

          <Avatar.Info>
            <Avatar.Name>{username}</Avatar.Name>
            <Avatar.Bio>{bio}</Avatar.Bio>
          </Avatar.Info>
        </Avatar.Root>
      </Link>

      <div className="flex items-center gap-2">
        <Button variant="secondary" icon={following ? <IoPersonRemoveOutline /> : <IoPersonAddOutline />}>
          {following ? "Unfollow" : "Follow"}
        </Button>

        <Button variant="secondary" icon={favorited ? <IoHeart /> : <IoHeartOutline />}>
          {favorited ? "Unfavorite" : "Favorite"} ({favoritesCount})
        </Button>
      </div>
    </div>
  );
};

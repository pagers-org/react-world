import Link from "next/link";

import { useMemo } from "react";

import { IoHeartOutline, IoHeart } from "react-icons/io5";

import { Avatar } from "components/shared/ui/avatar";
import { Button } from "components/shared/ui/button";
import { ListItem } from "components/shared/ui/list-item";
import { Tags } from "components/shared/ui/tags";
import { RelativeFormatter } from "lib/date-formatter/relative-formatter";
import type { Article } from "models/article";

type Props = {
  article: Article;
};

export const ArticleItem = ({ article }: Props) => {
  const { slug, title, description, author, tagList, favoritesCount, favorited, createdAt } = article;

  const { username, image } = author;

  const relativeTime = useMemo(() => new RelativeFormatter(new Date()).format(createdAt), [createdAt]);

  return (
    <ListItem.Root>
      <div className="mb-2 flex items-center justify-between">
        <Link href={`/profile/${username}`}>
          <Avatar.Root>
            <Avatar.Image src={image} alt="" />

            <Avatar.Info>
              <Avatar.Name>{username}</Avatar.Name>

              <Avatar.Description>{relativeTime}</Avatar.Description>
            </Avatar.Info>
          </Avatar.Root>
        </Link>

        <Button variant="secondary" icon={favorited ? <IoHeart /> : <IoHeartOutline />}>
          {favoritesCount}
        </Button>
      </div>

      <Link href={`/article/${slug}`}>
        <ListItem.Content>
          <ListItem.Title>{title}</ListItem.Title>

          <ListItem.Description>{description}</ListItem.Description>

          <div className="mt-2 flex w-full items-center justify-between">
            <span className="text-xs font-light text-zinc-600">Read more...</span>

            <Tags.Root>
              {tagList.map((tag) => (
                <Tags.Item key={tag} variant="secondary">
                  {tag}
                </Tags.Item>
              ))}
            </Tags.Root>
          </div>
        </ListItem.Content>
      </Link>
    </ListItem.Root>
  );
};

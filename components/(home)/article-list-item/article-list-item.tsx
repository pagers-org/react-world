import { Avatar } from "components/shared/ui/avatar";
import { Button } from "components/shared/ui/button";
import { ListItem } from "components/shared/ui/list-item";
import { Tags } from "components/shared/ui/tags";

export const ArticleListItem = () => {
  return (
    <ListItem.Root>
      <Avatar.Root>
        <Avatar.Anchor href="/profile/eric-simons">
          <Avatar.Image src="http://i.imgur.com/Qr71crq.jpg" alt="" />
        </Avatar.Anchor>

        <Avatar.Info>
          <Avatar.Anchor href="/profile/eric-simons">
            <Avatar.Name>Eric Simons</Avatar.Name>
          </Avatar.Anchor>

          <Avatar.Description>January 20th</Avatar.Description>
        </Avatar.Info>

        <div className="pull-xs-right">
          <Button outline>
            <i className="ion-heart" /> 29
          </Button>
        </div>
      </Avatar.Root>

      <ListItem.Content href="/article/how-to-build-webapps-that-scale">
        <ListItem.Title>How to build webapps that scale</ListItem.Title>

        <ListItem.Description>This is the description for the post.</ListItem.Description>

        <span>Read more...</span>

        <Tags.Root>
          <Tags.Item outline>realworld</Tags.Item>
          <Tags.Item outline>implementations</Tags.Item>
        </Tags.Root>
      </ListItem.Content>
    </ListItem.Root>
  );
};

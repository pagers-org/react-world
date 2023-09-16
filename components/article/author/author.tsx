import Link from "next/link";

import { IoAdd, IoHeartOutline } from "react-icons/io5";

import { Avatar } from "components/shared/ui/avatar";
import { Button } from "components/shared/ui/button";

export const Author = () => {
  return (
    <div className="my-1 flex items-center justify-center gap-7">
      <Link href="/profile/eric-simons">
        <Avatar.Root>
          <Avatar.Image src="http://i.imgur.com/Qr71crq.jpg" alt="" />

          <Avatar.Info>
            <Avatar.Name>Eric Simons</Avatar.Name>
            <Avatar.Bio>Simons bed is comfortable</Avatar.Bio>
          </Avatar.Info>
        </Avatar.Root>
      </Link>

      <div className="flex items-center gap-2">
        <Button variant="secondary" icon={<IoAdd />}>
          Follow (10)
        </Button>

        <Button variant="secondary" icon={<IoHeartOutline />}>
          Favorite (29)
        </Button>
      </div>
    </div>
  );
};

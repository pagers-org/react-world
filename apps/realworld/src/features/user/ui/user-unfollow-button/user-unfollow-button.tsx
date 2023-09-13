import { useFollowUserByUsername, useUnfollowUserByUsername } from '@/shared/api/realworld/endpoints/profile/profile';
import { Button } from '@packages/ui';
import React from 'react';
import { IoIosAdd } from 'react-icons/io';

interface UserUnfollowButtonProps {
  username: string;
}

const UserUnfollowButton = ({ username }: UserUnfollowButtonProps) => {
  const { mutateAsync: followUserByUsername } = useUnfollowUserByUsername();
  const handleFollowUser = () => {
    followUserByUsername({ username });
  };
  return (
    <Button
      variant="fill"
      color="gray"
      size="s"
      onClick={handleFollowUser}
      icon={{
        start: <IoIosAdd />,
      }}
    >
      Unfollow {username}
    </Button>
  );
};

export default UserUnfollowButton;

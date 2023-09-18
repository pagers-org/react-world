import { useFollowUserByUsername, useUnfollowUserByUsername } from '@/shared/api/realworld/endpoints/profile/profile';
import { Button } from '@packages/ui';
import React, { ReactNode } from 'react';
import { IoIosAdd } from 'react-icons/io';

interface UserFollowToggleButtonProps {
  following: boolean;
  username: string;
  children: ReactNode;
}

const UserFollowToggleButton = ({ children, username, following }: UserFollowToggleButtonProps) => {
  const { mutateAsync: followUserByUsername } = useFollowUserByUsername();
  const { mutateAsync: unfollowUserByUsername } = useUnfollowUserByUsername();

  const handleFollowUser = () => {
    followUserByUsername({ username });
  };
  const handleUnfollowUser = () => {
    unfollowUserByUsername({ username });
  };

  return (
    <Button
      variant={following ? 'fill' : 'outlined'}
      color="gray"
      size="s"
      onClick={() => {
        following ? handleFollowUser() : handleUnfollowUser();
      }}
      icon={{
        start: <IoIosAdd />,
      }}
    >
      {children}
    </Button>
  );
};

export default UserFollowToggleButton;

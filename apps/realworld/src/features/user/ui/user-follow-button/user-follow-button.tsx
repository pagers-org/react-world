import { useFollowUserByUsername } from '@/shared/api/realworld/endpoints/profile/profile';
import { Button } from '@packages/ui';
import React from 'react';
import { IoIosAdd } from 'react-icons/io';

interface UserFollowButtonProps {
  username: string;
}

const UserFollowButton = ({ username }: UserFollowButtonProps) => {
  const { mutateAsync: followUserByUsername } = useFollowUserByUsername();
  const handleFollowUser = () => {
    followUserByUsername({ username });
  };
  return (
    <Button
      variant="outlined"
      color="gray"
      size="s"
      onClick={handleFollowUser}
      icon={{
        start: <IoIosAdd />,
      }}
    >
      Follow {username}
    </Button>
  );
};

export default UserFollowButton;

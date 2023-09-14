import { UserFollowButton, UserUnfollowButton } from '@/features/user';
import React from 'react';

interface UserFollowToggleButtonProps {
  following: boolean;
  username: string;
}

const UserFollowToggleButton = ({ following, username }: UserFollowToggleButtonProps) => {
  return following ? <UserUnfollowButton username={username} /> : <UserFollowButton username={username} />;
};

export default UserFollowToggleButton;

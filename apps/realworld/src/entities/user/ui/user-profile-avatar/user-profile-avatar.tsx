import { Profile } from '@/shared/api/realworld/models';
import { Avatar } from '@packages/ui';
import Link from 'next/link';
import React from 'react';

interface UserProfileAvatarProps {
  author: Profile;
  createdAt: string;
}

const UserProfileAvatar = ({ author, createdAt }: UserProfileAvatarProps) => {
  const { image, username } = author;

  return (
    <div className="flex items-center gap-4">
      <Link href={`/${username}`}>
        <Avatar src={image} />
      </Link>
      <div>
        <Link className="font-medium text-green600 hover:underline" href={`/${username}`}>
          {username}
        </Link>
        <p className="text-gray1100 text-[0.75rem]">{createdAt}</p>
      </div>
    </div>
  );
};

export default UserProfileAvatar;

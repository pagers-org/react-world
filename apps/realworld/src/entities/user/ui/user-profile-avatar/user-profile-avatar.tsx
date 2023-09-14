import { Profile } from '@/shared/api/realworld/models';
import { Avatar } from '@packages/ui';
import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';
import { match } from 'ts-pattern';

interface UserProfileAvatarProps {
  author: Profile;
  createdAt: string;
  usernameColor?: string;
  direction?: 'row' | 'col';
}

const UserProfileAvatar = ({
  direction = 'col',
  author,
  createdAt,
  usernameColor = 'text-green600',
}: UserProfileAvatarProps) => {
  const { image, username } = author;
  const formattedDate = dayjs(createdAt).format('MMMM D, YYYY');

  return (
    <div className="flex items-center gap-8">
      <Link className="text-[1rem]" href={`/${username}`}>
        <Avatar src={image} />
      </Link>

      <div>
        <Link className={`font-medium hover:underline ${usernameColor}`} href={`/${username}`}>
          {username}
        </Link>
        <p className="text-gray1100 text-[0.75rem]">{formattedDate}</p>
      </div>
    </div>
  );
};

export default UserProfileAvatar;

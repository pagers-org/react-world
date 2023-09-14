'use client';
import { author, date, info, userBoxBlock } from '@/styles/account.css';
import { circle } from '@/styles/common.css';
import { formatDate } from '@/utils';

import Image from 'next/image';

type Props = {
  author: any;
  createdAt: string;
};
const UserBox = ({ author: { username, image }, createdAt }: Props) => {
  const handleUserBoxClick = async () => {
    console.log('클라 클릭');

    await fetch(`/api/profile?username=${username}`);
  };
  return (
    <div className={userBoxBlock} onClick={handleUserBoxClick}>
      <Image src={image} alt="author" width={32} height={32} className={circle} />
      <div className={info}>
        <div className={author}>{username}</div>
        <div className={date}>{formatDate(createdAt)}</div>
      </div>
    </div>
  );
};

export default UserBox;

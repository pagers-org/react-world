'use client';
import useUserStore from '@/stores/useUserStore';
import { backgroundBlack, backgroundGreen, container } from '@/styles/common.css';
import { banner } from '@/styles/home.css';
import { User } from '@/types/api/users';

import { ReactNode } from 'react';
type Props = {
  children: ReactNode;
  background: 'green' | 'black';
};
const Banner = ({ children, background }: Props) => {
  const { email } = useUserStore() as User;
  return email && background === 'green' ? (
    <div>
      <div></div>
    </div>
  ) : (
    <div className={`${banner} ${background === 'green' ? backgroundGreen : backgroundBlack}`}>
      <div className={container}>{children}</div>
    </div>
  );
};

export default Banner;

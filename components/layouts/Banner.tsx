'use client';
import useUserStore from '@/stores/useUserStore';
import { backgroundBlack, backgroundGreen, container } from '@/styles/common.css';
import { banner } from '@/styles/home.css';
import { ReactNode } from 'react';
type Props = {
  children: ReactNode;
  background: 'green' | 'black';
};
const Banner = ({ children, background }: Props) => {
  const { email } = useUserStore();
  return email && background === 'green' ? (
    <></>
  ) : (
    <div className={`${banner} ${background === 'green' ? backgroundGreen : backgroundBlack}`}>
      <div className={container}>{children}</div>
    </div>
  );
};

export default Banner;

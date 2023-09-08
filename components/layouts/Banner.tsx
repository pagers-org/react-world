import { container } from '@/styles/common.css';
import { banner } from '@/styles/home.css';
import { ReactNode } from 'react';
type Props = {
  children: ReactNode;
};
const Banner = ({ children }: Props) => {
  return (
    <div className={banner}>
      <div className={container}>{children}</div>
    </div>
  );
};

export default Banner;

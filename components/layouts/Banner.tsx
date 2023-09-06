import { banner } from '@/styles/home.css';
import { container } from '@/styles/layout.css';
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

import { backgroundBlack, backgroundGreen, container } from '@/styles/common.css';
import { banner } from '@/styles/home.css';
import { ReactNode } from 'react';
type Props = {
  children: ReactNode;
  background: 'green' | 'black';
};
const Banner = ({ children, background }: Props) => {
  return (
    <div className={`${banner} ${background === 'green' ? backgroundGreen : backgroundBlack}`}>
      <div className={container}>{children}</div>
    </div>
  );
};

export default Banner;

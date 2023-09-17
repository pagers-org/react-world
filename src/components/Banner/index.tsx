import { BannerStyle } from './index.css';

const Banner = () => {
  const a = '블로그 이름 / 블로그 제목';
  return (
    <div className={BannerStyle}>
      <div>{a}</div>
    </div>
  );
};

export default Banner;

import { banner, bannerDescription, bannerTitle } from '@/styles/home.css';
import { container } from '@/styles/layout.css';
import React from 'react';

const Banner = () => {
  return (
    <div className={banner}>
      <div className={container}>
        <h1 className={bannerTitle}>conduit</h1>
        <p className={bannerDescription}>A place to share your knowledge.</p>
      </div>
    </div>
  );
};

export default Banner;

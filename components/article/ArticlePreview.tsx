import Image from 'next/image';
import React from 'react';

const ArticlePreview = () => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href="/profile/eric-simons">
          <Image src={'http://i.imgur.com/Qr71crq.jpg'} />
        </a>
        <div className="info">
          <a href="/profile/eric-simons" className="author">
            Eric Simons
          </a>
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> 29
        </button>
      </div>
      <a href="/article/how-to-build-webapps-that-scale" className="preview-link">
        <h1>How to build webapps that scale</h1>
        <p>This is the description for the post.</p>
        <span>Read more...</span>
        <ul className="tag-list">
          <li className="tag-default tag-pill tag-outline">realworld</li>
          <li className="tag-default tag-pill tag-outline">implementations</li>
        </ul>
      </a>
    </div>
  );
};

export default ArticlePreview;

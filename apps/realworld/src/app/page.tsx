import Image from 'next/image';
import styles from './page.module.css';
import { PopularTags } from '@/widgets/tags';
import { Suspense } from 'react';
import { Tabs } from '@packages/ui';
import { FeedToggle } from '@/widgets/tab';

export default function Home() {
  return (
    <div className="home-page">
      <div className="p-32 mb-32 text-white bg-green600">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-[3.5rem] [text-shadow:_0_1px_3px_rgb(0_0_0_/0.3)]">conduit</h1>
          <p className="font-light text-[1.5rem]">A place to share your knowledge.</p>
        </div>
      </div>

      <div className="w-full mx-auto max-w-940 max-tablet:max-w-720 max-mobile:max-w-554">
        <div className="flex">
          <div className="flex-[0_0_75%]">
            <FeedToggle />

            <div className="article-preview">
              <div className="article-meta">
                <a href="/profile/eric-simons">
                  <img src="http://i.imgur.com/Qr71crq.jpg" />
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

            <div className="article-preview">
              <div className="article-meta">
                <a href="/profile/albert-pai">
                  <img src="http://i.imgur.com/N4VcUeJ.jpg" />
                </a>
                <div className="info">
                  <a href="/profile/albert-pai" className="author">
                    Albert Pai
                  </a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 32
                </button>
              </div>
              <a href="/article/the-song-you" className="preview-link">
                <h1>The song you won&aops;t ever stop singing. No matter how hard you try.</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-default tag-pill tag-outline">realworld</li>
                  <li className="tag-default tag-pill tag-outline">implementations</li>
                </ul>
              </a>
            </div>

            <ul className="pagination">
              <li className="page-item active">
                <a className="page-link" href="">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="">
                  2
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-[0_0_25%]">
            <div className="px-10 pt-5 pb-5 bg-gray500 rounded-[4px] flex flex-col gap-4">
              <p>Popular Tags</p>
              <PopularTags />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

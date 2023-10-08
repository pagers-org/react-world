import { Articles } from './page/Articles.server';
import { mainBanner, bannerTitle, bannerSubTitle } from './page.css';

export default function Page() {
  return (
    <div>
      <section className={mainBanner}>
        <h1 className={bannerTitle}>conduit</h1>
        <p className={bannerSubTitle}>A place to share your knowledge.</p>
      </section>
      <section>
        <Articles />
      </section>
    </div>
  );
}

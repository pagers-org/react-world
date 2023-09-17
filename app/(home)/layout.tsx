import { ReactNode } from 'react';

import { Banner } from 'components/home/banner';
import { TagList } from 'components/home/tag-list';

type Props = {
  feeds: ReactNode;
};

const HomeLayout = ({ feeds }: Props) => {
  return (
    <div className="home-page">
      <Banner />

      <div className="page container">
        <div className="row">
          <div className="col-md-9">{feeds}</div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <TagList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;

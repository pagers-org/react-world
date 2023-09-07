interface HomeFeedTabProps {
  activeFeed: 'my_feed' | 'global_feed';
}

const HomeFeedTab: React.FC<HomeFeedTabProps> = ({ activeFeed }) => (
  <div className="feed-toggle">
    <ul className="nav nav-pills outline-active">
      <li className="nav-item">
        <a
          className={`nav-link ${activeFeed === 'my_feed' ? 'active' : ''}`}
          href=""
        >
          Your Feed
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${activeFeed === 'global_feed' ? 'active' : ''}`}
          href=""
        >
          Global Feed
        </a>
      </li>
    </ul>
  </div>
);

export default HomeFeedTab;

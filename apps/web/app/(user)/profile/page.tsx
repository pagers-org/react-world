export default function ProfilePage(): JSX.Element {
  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img alt="" className="user-img" src="http://i.imgur.com/Qr71crq.jpg" />
              <h4>Eric Simons</h4>
              <p>
                Cofounder @GoThinkster, lived in Aol&rsquo;s HQ for a few months, kinda looks like Peeta from the Hunger
                Games
              </p>
              <button className="btn btn-sm btn-outline-secondary action-btn" type="button">
                <i className="ion-plus-round" />
                &nbsp; Follow Eric Simons
              </button>
              <button className="btn btn-sm btn-outline-secondary action-btn" type="button">
                <i className="ion-gear-a" />
                &nbsp; Edit Profile Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    My Articles
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Favorited Articles
                  </a>
                </li>
              </ul>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                <a href="/profile/eric-simons">
                  <img alt="" src="http://i.imgur.com/Qr71crq.jpg" />
                </a>
                <div className="info">
                  <a className="author" href="/profile/eric-simons">
                    Eric Simons
                  </a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right" type="button">
                  <i className="ion-heart" /> 29
                </button>
              </div>
              <a className="preview-link" href="/article/how-to-buil-webapps-that-scale">
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
                  <img alt="" src="http://i.imgur.com/N4VcUeJ.jpg" />
                </a>
                <div className="info">
                  <a className="author" href="/profile/albert-pai">
                    Albert Pai
                  </a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right" type="button">
                  <i className="ion-heart" /> 32
                </button>
              </div>
              <a className="preview-link" href="/article/the-song-you">
                <h1>The song you won&rsquo;t ever stop singing. No matter how hard you try.</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-default tag-pill tag-outline">Music</li>
                  <li className="tag-default tag-pill tag-outline">Song</li>
                </ul>
              </a>
            </div>

            <ul className="pagination">
              <li className="page-item active">
                <a className="page-link" href="/">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">
                  2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

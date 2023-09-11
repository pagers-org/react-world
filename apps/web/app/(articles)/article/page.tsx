export default function ArticlePage(): JSX.Element {
  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>How to build webapps that scale</h1>

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
            <button className="btn btn-sm btn-outline-secondary" type="button">
              <i className="ion-plus-round" />
              &nbsp; Follow Eric Simons <span className="counter">(10)</span>
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-sm btn-outline-primary" type="button">
              <i className="ion-heart" />
              &nbsp; Favorite Post <span className="counter">(29)</span>
            </button>
            <button className="btn btn-sm btn-outline-secondary" type="button">
              <i className="ion-edit" /> Edit Article
            </button>
            <button className="btn btn-sm btn-outline-danger" type="button">
              <i className="ion-trash-a" /> Delete Article
            </button>
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>Web development technologies have evolved at an incredible clip over the past few years.</p>
            <h2 id="introducing-ionic">Introducing RealWorld.</h2>
            <p>It&rsquo;s a great solution for learning how other frameworks work.</p>
            <ul className="tag-list">
              <li className="tag-default tag-pill tag-outline">realworld</li>
              <li className="tag-default tag-pill tag-outline">implementations</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <div className="article-meta">
            <a href="profile.html">
              <img alt="" src="http://i.imgur.com/Qr71crq.jpg" />
            </a>
            <div className="info">
              <a className="author" href="/">
                Eric Simons
              </a>
              <span className="date">January 20th</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary" type="button">
              <i className="ion-plus-round" />
              &nbsp; Follow Eric Simons
            </button>
            &nbsp;
            <button className="btn btn-sm btn-outline-primary" type="button">
              <i className="ion-heart" />
              &nbsp; Favorite Article <span className="counter">(29)</span>
            </button>
            <button className="btn btn-sm btn-outline-secondary" type="button">
              <i className="ion-edit" /> Edit Article
            </button>
            <button className="btn btn-sm btn-outline-danger" type="button">
              <i className="ion-trash-a" /> Delete Article
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <form className="card comment-form">
              <div className="card-block">
                <textarea className="form-control" placeholder="Write a comment..." rows={3} />
              </div>
              <div className="card-footer">
                <img alt="" className="comment-author-img" src="http://i.imgur.com/Qr71crq.jpg" />
                <button className="btn btn-sm btn-primary" type="button">
                  Post Comment
                </button>
              </div>
            </form>

            <div className="card">
              <div className="card-block">
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <a className="comment-author" href="/profile/author">
                  <img alt="" className="comment-author-img" src="http://i.imgur.com/Qr71crq.jpg" />
                </a>
                &nbsp;
                <a className="comment-author" href="/profile/jacob-schmidt">
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
              </div>
            </div>

            <div className="card">
              <div className="card-block">
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="card-footer">
                <a className="comment-author" href="/profile/author">
                  <img alt="" className="comment-author-img" src="http://i.imgur.com/Qr71crq.jpg" />
                </a>
                &nbsp;
                <a className="comment-author" href="/profile/jacob-schmidt">
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
                <span className="mod-options">
                  <i className="ion-trash-a" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

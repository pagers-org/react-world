import Image from 'next/image';
import Link from 'next/link';

const ArticleDetailPageMain = () => {
  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>How to build webapps that scale</h1>

          <div className="article-meta">
            <Link href="/profile/eric-simons">
              <Image
                src="http://i.imgur.com/Qr71crq.jpg"
                alt="eric simons"
                width={32}
                height={32}
              />
            </Link>
            <div className="info">
              <Link href="/profile/eric-simons" className="author">
                Eric Simons
              </Link>
              <span className="date">January 20th</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow Eric Simons <span className="counter">(10)</span>
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Post <span className="counter">(29)</span>
            </button>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-edit"></i> Edit Article
            </button>
            <button className="btn btn-sm btn-outline-danger">
              <i className="ion-trash-a"></i> Delete Article
            </button>
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>
              Web development technologies have evolved at an incredible clip
              over the past few years.
            </p>
            <h2 id="introducing-ionic">Introducing RealWorld.</h2>
            <p>{`It's a great solution for learning how other frameworks work.`}</p>
            <ul className="tag-list">
              <li className="tag-default tag-pill tag-outline">realworld</li>
              <li className="tag-default tag-pill tag-outline">
                implementations
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <div className="article-meta">
            <Link href="profile.html">
              <Image
                src="http://i.imgur.com/Qr71crq.jpg"
                alt="eric simons"
                width={32}
                height={32}
              />
            </Link>
            <div className="info">
              <Link href="" className="author">
                Eric Simons
              </Link>
              <span className="date">January 20th</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow Eric Simons
            </button>
            &nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Article <span className="counter">(29)</span>
            </button>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-edit"></i> Edit Article
            </button>
            <button className="btn btn-sm btn-outline-danger">
              <i className="ion-trash-a"></i> Delete Article
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <form className="card comment-form">
              <div className="card-block">
                <textarea
                  className="form-control"
                  placeholder="Write a comment..."
                  rows={3}
                ></textarea>
              </div>
              <div className="card-footer">
                <Image
                  src="http://i.imgur.com/Qr71crq.jpg"
                  alt="eric simons"
                  width={30}
                  height={30}
                  className="comment-author-img"
                />
                <button className="btn btn-sm btn-primary">Post Comment</button>
              </div>
            </form>

            <div className="card">
              <div className="card-block">
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div className="card-footer">
                <a href="/profile/author" className="comment-author">
                  <Image
                    className="comment-author-img"
                    src="http://i.imgur.com/Qr71crq.jpg"
                    alt="eric simons"
                    width={20}
                    height={20}
                  />
                </a>
                &nbsp;
                <a href="/profile/jacob-schmidt" className="comment-author">
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
              </div>
            </div>

            <div className="card">
              <div className="card-block">
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div className="card-footer">
                <a href="/profile/author" className="comment-author">
                  <Image
                    className="comment-author-img"
                    src="http://i.imgur.com/Qr71crq.jpg"
                    alt="eric simons"
                    width={20}
                    height={20}
                  />
                </a>
                &nbsp;
                <a href="/profile/jacob-schmidt" className="comment-author">
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
                <span className="mod-options">
                  <i className="ion-trash-a"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPageMain;

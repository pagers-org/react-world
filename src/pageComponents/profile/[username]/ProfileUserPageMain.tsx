import Image from 'next/image';
import Link from 'next/link';

const ProfileUserPageMain = () => {
  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <Image
                src="http://i.imgur.com/Qr71crq.jpg"
                alt="Eric Simons"
                className="user-img"
                width={100}
                height={100}
              />
              <h4>Eric Simons</h4>
              <p>
                {`Cofounder @GoThinkster, lived in Aol's HQ for a few months,
                kinda looks like Peeta from the Hunger Games`}
              </p>
              <button className="btn btn-sm btn-outline-secondary action-btn">
                <i className="ion-plus-round"></i>
                &nbsp; Follow Eric Simons
              </button>
              <button className="btn btn-sm btn-outline-secondary action-btn">
                <i className="ion-gear-a"></i>
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
                  <Link className="nav-link active" href="">
                    My Articles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="">
                    Favorited Articles
                  </Link>
                </li>
              </ul>
            </div>

            <div className="article-preview">
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
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 29
                </button>
              </div>
              <Link
                href="/article/how-to-buil-webapps-that-scale"
                className="preview-link"
              >
                <h1>How to build webapps that scale</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-default tag-pill tag-outline">
                    realworld
                  </li>
                  <li className="tag-default tag-pill tag-outline">
                    implementations
                  </li>
                </ul>
              </Link>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                <Link href="/profile/albert-pai">
                  <Image
                    src="http://i.imgur.com/N4VcUeJ.jpg"
                    alt="albert pai"
                    width={32}
                    height={32}
                  />
                </Link>
                <div className="info">
                  <Link href="/profile/albert-pai" className="author">
                    Albert Pai
                  </Link>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 32
                </button>
              </div>
              <Link href="/article/the-song-you" className="preview-link">
                <h1>
                  {`The song you won't ever stop singing. No matter how hard you
                  try.`}
                </h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-default tag-pill tag-outline">Music</li>
                  <li className="tag-default tag-pill tag-outline">Song</li>
                </ul>
              </Link>
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
        </div>
      </div>
    </div>
  );
};

export default ProfileUserPageMain;

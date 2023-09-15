import Image from 'next/image'

const Contents = () => {
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <li className="nav-item">
            <a className="nav-link" href="">
              Your Feed
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="">
              Global Feed
            </a>
          </li>
        </ul>
      </div>

      <div className="article-preview">
        <div className="article-meta">
          <a href="/profile/eric-simons">
            <Image
              src="http://i.imgur.com/Qr71crq.jpg"
              alt=""
              width="100"
              height="100"
            />
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
        <a
          href="/article/how-to-build-webapps-that-scale"
          className="preview-link"
        >
          <h1>How to build webapps that scale</h1>
          <p>This is the description for the post.</p>
          <span>Read more...</span>
          <ul className="tag-list">
            <li className="tag-default tag-pill tag-outline">realworld</li>
            <li className="tag-default tag-pill tag-outline">
              implementations
            </li>
          </ul>
        </a>
      </div>

      <div className="article-preview">
        <div className="article-meta">
          <a href="/profile/albert-pai">
            <Image
              src="http://i.imgur.com/N4VcUeJ.jpg"
              alt=""
              width="100"
              height="100"
            />
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
          <h1>
            The song you won`t ever stop singing. No matter how hard you try.
          </h1>
          <p>This is the description for the post.</p>
          <span>Read more...</span>
          <ul className="tag-list">
            <li className="tag-default tag-pill tag-outline">realworld</li>
            <li className="tag-default tag-pill tag-outline">
              implementations
            </li>
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
  )
}

export default Contents

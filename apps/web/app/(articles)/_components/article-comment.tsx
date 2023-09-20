"use client";

export function ArticleComment(): JSX.Element {
  return (
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
      </div>
    </div>
  );
}

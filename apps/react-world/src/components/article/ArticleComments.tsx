import type { ArticleCommentData } from '@/apis/article/ArticleService.types';

interface ArticleCommentsProps {
  comments: ArticleCommentData[];
}

const ArticleComments = (props: ArticleCommentsProps) => {
  const { comments } = props;

  return (
    <div className="row">
      <div className="col-xs-12 col-md-8 offset-md-2">
        <form className="card comment-form">
          <div className="card-block">
            <textarea
              className="form-control"
              placeholder="Write a comment..."
            ></textarea>
          </div>
          <div className="card-footer">
            {/* This will likely be the logged-in user's image */}
            <img
              src="http://i.imgur.com/Qr71crq.jpg"
              className="comment-author-img"
            />
            <button className="btn btn-sm btn-primary">Post Comment</button>
          </div>
        </form>

        {comments.map(comment => (
          <div key={comment.id} className="card">
            <div className="card-block">
              <p className="card-text">{comment.body}</p>
            </div>
            <div className="card-footer">
              <a
                href={`/profile/${comment.author.username}`}
                className="comment-author"
              >
                <img
                  src={comment.author.image}
                  className="comment-author-img"
                />
              </a>
              &nbsp;
              <a
                href={`/profile/${comment.author.username}`}
                className="comment-author"
              >
                {comment.author.username}
              </a>
              <span className="date-posted">
                {new Date(comment.createdAt).toDateString()}
              </span>
              {/* If the logged-in user has the right to delete this comment, display the delete button */}
              {/* For now, I'm leaving it static but you'll likely need a condition */}
              <span className="mod-options">
                <i className="ion-trash-a"></i>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleComments;

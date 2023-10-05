import React from 'react';

const CommentCard = () => {
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
      <div className="card-footer">
        <a href="/profile/author" className="comment-author">
          <img
            src="http://i.imgur.com/Qr71crq.jpg"
            className="comment-author-img"
          />
        </a>
        &nbsp;
        <a href="/profile/jacob-schmidt" className="comment-author">
          Jacob Schmidt
        </a>
        <span className="date-posted">Dec 29th</span>
      </div>
    </div>
  );
};

export default CommentCard;

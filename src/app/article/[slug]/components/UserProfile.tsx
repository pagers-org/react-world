import { ArticleType } from '@/types/article';
import { AddOutline, Heart } from 'react-ionicons';

import DayFormatter from '@/utils/dayFormat';

interface UserProfileProps {
  userNameReplaceSpaceToPercent: string;
  article: ArticleType;
  isMyArticle: boolean;
  handleSetFollow: () => Promise<void>;
}

const UserProfile = ({
  userNameReplaceSpaceToPercent,
  article,
  isMyArticle,
  handleSetFollow,
}: UserProfileProps) => {
  return (
    <div className="article-meta !flex">
      <a href={userNameReplaceSpaceToPercent}>
        <img src={article.author.image} />
      </a>
      <div className="info">
        <a href={userNameReplaceSpaceToPercent} className="author">
          {article.author.username}
        </a>
        <span className="date">
          {new DayFormatter(new Date(article.createdAt)).getMonthDate()}
        </span>
      </div>
      {isMyArticle ? (
        <div className="flex gap-1 items-center">
          &nbsp;&nbsp;
          <button className="btn btn-sm btn-outline-secondary">
            <i className="ion-edit"></i> Edit Article
          </button>
          <button className="btn btn-sm btn-outline-danger">
            <i className="ion-trash-a"></i> Delete Article
          </button>
        </div>
      ) : (
        <div className="flex gap-1">
          <button
            onClick={handleSetFollow}
            className="btn btn-sm btn-outline-secondary !flex !items-center"
          >
            <AddOutline cssClasses={'mr-2'} width={'10.5px'} height={'14px'} />
            <p className="!mb-0 ">
              {article.author.following
                ? `Unfollow ${article.author.username}`
                : `Follow ${article.author.username}`}
            </p>
          </button>
          <button className="btn btn-sm btn-outline-primary !flex !items-center hover:fill-white">
            <Heart width={'10.5px'} height={'14px'} color={'#5CB85C'} />
            &nbsp; Favorite Post <span className="counter">(29)</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

import Chip from "./atoms/Chip";
import LikeButton from "./atoms/LikeButton";
import Profile from "./common/Profile";

const tempImgUrl = "/excitedPenguin.jpeg";
const tempName = "Anah Benesova";
const tempDate = "December 9, 2022";

const ArticleCard = () => {
  return (
    <li className="border-t-2 border-t-gray-300 px-2 py-4">
      <div className="flex justify-between items-center">
        <Profile src={tempImgUrl} name={tempName} date={tempDate} />
        <div>
          <LikeButton likes={1740} />
        </div>
      </div>
      <article className="mt-2">
        <h1 className="text-xl font-semibold">
          Try to transmit the HTTP card, maybe it will override the multi-byte hard drive!
        </h1>
        <p className="text-sm text-gray-400">
          Assumenda molestiae laboriosam enim ipsum quaerat enim officia vel quo. Earum odit rem natus totam atque
          cumque. Sint dolorem facere non.
        </p>
      </article>
      <div className="flex justify-between pt-4 text-gray-300 text-sm">
        <p>Read more...</p>
        <ul className="flex gap-1">
          <Chip text="voluptate" />
          <Chip text="rerum" />
          <Chip text="ducimus" />
          <Chip text="hic" />
        </ul>
      </div>
    </li>
  );
};
export default ArticleCard;

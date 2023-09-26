import { Article } from "@/types/articles";
import LikeOrFavoriteBtn from "./buttons/LikeOrFavoriteBtn";
import Profile from "./common/Profile";
import Link from "next/link";
import Tag from "./atoms/Tag";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({
  article: { title, description, tagList, favoritesCount, author, createdAt, slug },
}: ArticleCardProps) => {
  return (
    <li className="border-t-[1px] border-t-gray-300 px-2 py-4 xl:max-w-4xl">
      <div className="flex justify-between items-center">
        <Profile src={author.image} name={author.username} date={createdAt} />
        <div>
          <LikeOrFavoriteBtn>♥ {favoritesCount}</LikeOrFavoriteBtn>
        </div>
      </div>
      <Link href={`/article/${slug}`}>
        <article className="mt-2">
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="text-sm text-gray-400">{description}</p>
        </article>
      </Link>
      <div className="flex justify-between pt-4 text-gray-300 text-sm">
        <Link href={`/articles/${slug}`}>Read more...</Link>
        <ul className="flex gap-1">
          {tagList.map((tag) => (
            <Tag text={tag} />
          ))}
        </ul>
      </div>
    </li>
  );
};
export default ArticleCard;

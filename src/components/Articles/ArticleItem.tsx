import Image from "next/image";
import Link from "next/link";
import {
  article_description,
  article_title,
  user_image,
  user_name,
  article_container,
  article_createdAt,
  tag_list_container,
  user_info_container,
  list_tag,
  like_button,
  user_image_name,
} from "@/styles/home_articles.css";
import { color_state } from "@/styles/container.css";
import { parsingDate } from "@/utils/parsingDate";

type Article = {
  title: string;
  description: string;
  tagList: string[];
  createdAt: string;
  favorited: boolean;
  favoritesCount: number;
  userName: string;
  userImage: string;
  slug: string;
};

export default function ArticleItem({
  title,
  description,
  tagList,
  createdAt,
  favoritesCount,
  favorited,
  userName,
  userImage,
  slug,
}: Article) {
  const formattedDate = parsingDate(createdAt);

  return (
    <>
      <li className={`${article_container} ${color_state}`}>
        <Link href={`/article/${slug}`}>
          <h3 className={article_title}>{title}</h3>
          <p className={`${article_description} ${color_state}`}>
            {description}
          </p>
          <p className={`${article_createdAt} ${color_state}`}>
            {" "}
            {formattedDate}
          </p>
        </Link>

        <div className={user_info_container}>
          <div className={user_image_name}>
            <Image
              className={user_image}
              src={userImage}
              width={30}
              height={30}
              alt="userimage"
            />
            <div>
              <Link href={`/@${userName}`}>
                <p className={user_name}> {userName}</p>
              </Link>
            </div>
          </div>

          <div>
            <button className={`${like_button} ${color_state}`}>
              ❤︎ {favoritesCount}
            </button>
          </div>

          <div className={`${tag_list_container} ${color_state}`}>
            {tagList.map((tag, index) => {
              return (
                <div key={index} className={list_tag}>
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
      </li>
    </>
  );
}

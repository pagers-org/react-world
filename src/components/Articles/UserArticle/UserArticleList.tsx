import UserArticleCard from "@/components/composables/Card/UserArticleCard";
import UserArticleItem from "./UserArticleItem";

type Author = {
  username: string;
  bio: string | null;
  image: string;
  following: boolean;
};

type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
};

type UserAritcleType = {
  articles: Article[];
};

export default function UserArticle({ articles }: UserAritcleType) {
  return (
    <>
      <UserArticleCard>
        {articles.map((article, key) => {
          return (
            <UserArticleItem
              key={key}
              isFirst={key === 0}
              title={article.title}
              tagList={article.tagList}
              createdAt={article.createdAt}
              description={article.description}
              username={article.author.username}
              userimage={article.author.image}
              favoritesCount={article.favoritesCount}
              favorited={article.favorited}
              slug={article.slug}
            />
          );
        })}
      </UserArticleCard>
    </>
  );
}

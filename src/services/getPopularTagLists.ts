import { countArticleTags } from "@/utils/countArticleTags";

export const getPopularTagLists = async () => {
  try {
    const endPoint = process.env.NEXT_PUBLIC_GET_ALL_ARTICLES_END_POINT;

    if (!endPoint) {
      throw new Error("엔드포인트가 존재하지 않습니다!");
    }

    const res = await fetch(endPoint);

    if (!res.ok) {
      throw new Error("응답이 올바르지 않습니다!");
    }

    const data = await res.json();

    const { articles } = data;

    const popularTags = countArticleTags({ articles });

    if (!popularTags) {
      return [];
    } else {
      return popularTags;
    }
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getUserArticles = async (decodedUserName: string) => {
  try {
    const res = await fetch(
      `https://api.realworld.io/api/articles?author=${decodedUserName}&offset=0&limit=5`
    );

    if (!res.ok) {
      return await res.json();
    }

    const data = await res.json();

    const articles = data.articles;
    const articlesCount = data.articlesCount;

    return { articles, articlesCount };
  } catch (err) {
    console.error(err);
  }
};

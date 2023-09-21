export const getSlugArticleComments = async (slug: string) => {
  try {
    const res = await fetch(
      `https://api.realworld.io/api/articles/${slug}/comments`
    );

    const data = await res.json();

    const { comments } = data;

    const commentsCount = comments.length;

    return { commentsCount, comments };
  } catch (err) {
    console.error(err);
    return { commentsCount: 0, comments: [] };
  }
};

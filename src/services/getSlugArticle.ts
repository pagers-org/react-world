export const getSlugArticle = async (slug: string) => {
  try {
    const res = await fetch(`https://api.realworld.io/api/articles/${slug}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

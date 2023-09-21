export const getUserInfoBySlug = async (decodedUserName: string) => {
  try {
    const res = await fetch(
      `https://api.realworld.io/api/profiles/${decodedUserName}`
    );

    if (!res.ok) {
      return await res.json();
    }

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

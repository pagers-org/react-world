import { API_BASE_URL } from '@/constants/env';
import { getCookie } from '@/utils/cookies';

// Article 좋아요
const favoriteArticleAPI = async (slug: string) => {
  const accessToken = getCookie('token');
  console.log(accessToken);

  return fetch(
    'https://api.realworld.io/api/articles/Try-to-generate-the-TCP-bus-maybe-it-will-override-the-neural-bandwidth%21-120863/favorite',
    {
      method: 'POST',
      headers: {
        accept: 'application/json',
        // 'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Token ${accessToken}`,
      },
    }
  ).then(res => {
    if (!(res.status === 200)) {
      throw new Error('Error');
    }
    return res.json();
  });
};

// Article 좋아요 취소
const unFavoriteArticleAPI = async (slug: string) => {
  const accessToken = getCookie('token');
  console.log(accessToken);

  return fetch(`${API_BASE_URL}/articles/${slug}/favorite`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json; charset=utf-8', Authorization: `Token ${accessToken}` },
  }).then(res => {
    if (!(res.status === 200)) {
      throw new Error('Error');
    }
    return res.json();
  });
};

export { favoriteArticleAPI, unFavoriteArticleAPI };

import { useQuery } from '@tanstack/react-query';

export type Author = {
  username: string;
  bio: string | null;
  image: string;
  following: boolean;
};

export type Article = {
  author: Author;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt: string;
};

function fetchPosts(page: string) {
  return fetch(
    `https://api.realworld.io/api/articles?offset=${page}&limit=20`,
  ).then((res) => res.json());
}

export function useGetAllPosts(page: string) {
  const {
    isLoading,
    error,
    data: posts,
    refetch,
  } = useQuery(['posts', page], () => fetchPosts(page));

  return { isLoading, error, posts, refetch };
}

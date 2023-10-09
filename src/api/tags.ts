import type { Tags } from './tags.types';

export const getTagList = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/tags`);
  const results: Tags = await response.json();
  return results;
};

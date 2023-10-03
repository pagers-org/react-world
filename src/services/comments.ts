import { executeAPI } from "./app";

export const getComments = async (slug: string): Promise<any> => {
  const result = await executeAPI({
    method: "GET",
    url: `/articles/${slug}/comments`,
  });
  return result;
};

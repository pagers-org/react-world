import { executeAPI } from "./app";

export const getTags = async (): Promise<string[]> => {
  const result = await executeAPI({
    method: "GET",
    url: "/tags",
  });
  return result.tags;
};

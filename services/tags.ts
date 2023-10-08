import { http } from '@/utils/http';

export const getTags = async () => {
  return await http.get('/tags');
};

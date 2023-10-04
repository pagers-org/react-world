import { http } from '@/utils/http';

export const getTags = async () => {
  return http.get('/tags');
};

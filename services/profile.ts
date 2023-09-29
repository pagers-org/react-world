import { http } from '@/utils/http';

const getProfile = (username: string) => {
  return http.get(`/profiles/${username}`);
};

export { getProfile };

import { http } from '@/utils/http';

const getProfile = (username: string) => {
  return http.get(`/profiles/${username}`);
};

const followUser = (username: string) => {
  return http.post(`/profiles/${username}`);
};

const unFollowUser = (username: string) => {
  return http.delete(`/profiles/${username}`);
};

export { getProfile, followUser, unFollowUser };

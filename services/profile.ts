import { http } from '@/libs/http';

const getProfile = (username: string) => {
  return http.get(`https://api.realworld.io/api/profiles/${username}`);
};

const followUser = (username: string) => {
  return http.post(`https://api.realworld.io/api/profiles/${username}`);
};

const unFollowUser = (username: string) => {
  return http.delete(`https://api.realworld.io/api/profiles/${username}`);
};

export { getProfile, followUser, unFollowUser };

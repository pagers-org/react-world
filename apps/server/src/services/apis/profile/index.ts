import { IGetUserProfileParams } from '@/types/profile.type';
import { instance } from '../../instance';

export const profileApi = {
    getUserProfile: async ({ username }: IGetUserProfileParams) =>
        await instance.get(`/tags/${username}`).then(res => res.data),
};

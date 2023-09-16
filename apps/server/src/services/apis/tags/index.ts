import { instance } from '../../instance';

export const tagsApi = {
    getTags: async () => await instance.get(`/tags`).then(res => res.data),
};

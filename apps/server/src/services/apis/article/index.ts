import { IGetArticleListParams } from '@/types/article';
import { instance } from '../../instance';

export const articleApi = {
    getArticleList: async ({
        author,
        tag,
        favorited,
        limit,
        offset,
    }: IGetArticleListParams) =>
        await instance
            .get('/articles', {
                params: {
                    author,
                    tag,
                    favorited,
                    limit,
                    offset,
                },
            })
            .then(res => res.data),
};

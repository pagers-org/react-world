export interface IGetArticleListParams {
    author?: string;
    tag?: string;
    favorited?: string;
    limit?: number;
    offset?: number;
}

export interface IGetArticleDetailParams {
    slug: string;
}

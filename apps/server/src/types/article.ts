export interface IGetArticleListParams {
    author?: string;
    tag?: string;
    favorited?: string;
    limit?: number;
    offset?: number;
}

export interface IDefaultSlugParams {
    slug: string;
}

export interface IGetArticleDetailParams extends IDefaultSlugParams {}

export interface IGetArticleCommentsParams extends IDefaultSlugParams {}

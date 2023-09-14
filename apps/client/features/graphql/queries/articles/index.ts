import { gql, request } from 'graphql-request';

interface IArticle {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: IAuthor;
}

interface IAuthor {
    username: string;
    bio?: string;
    image: string;
    following: boolean;
}

interface GArticlesQuery {
    articles: IArticle;
    articlesCount: number;
}

const articlesQuery = gql`
    query getArticleList {
        getArticleList {
            articles {
                body
                title
                createdAt
                description
                favorited
                favoritesCount
                slug
                tagList
                updatedAt
                author {
                    following
                    image
                    username
                }
            }
            articlesCount
        }
    }
`;

export { type IArticle, type IAuthor, type GArticlesQuery, articlesQuery };

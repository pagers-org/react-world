import { gql } from 'graphql-request';

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
    bio: string;
    image: string;
    following: boolean;
}

interface GArticlesQuery {
    getArticleList: {
        articles: IArticle[];
        articlesCount: number;
    };
}

const articlesQuery = gql`
    query getArticleList(
        $tag: String
        $author: String
        $favorited: String
        $offset: Int
        $limit: Int
    ) {
        getArticleList(
            tag: $tag
            author: $author
            favorited: $favorited
            offset: $offset
            limit: $limit
        ) {
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
                    bio
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

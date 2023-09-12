import { ApolloServer, gql } from 'apollo-server';
import { articleApi } from './services/apis/article';
import { IGetArticleListParams } from '@/types/article';

const typeDefs = gql`
    type Query {
        getArticleList: Articles!
    }

    type Articles {
        articles: [Article]!
        articlesCount: Int!
    }

    type Article {
        slug: String!
        title: String!
        description: String!
        body: String!
        tagList: [String]!
        createdAt: String!
        updatedAt: String!
        favorited: Boolean!
        favoritesCount: Int!
        author: Author!
    }

    type Author {
        username: String!
        bio: String!
        image: String!
        following: Boolean!
    }
`;

const resolvers = {
    Query: {
        async getArticleList(
            _: never,
            { author, tag, favorited, limit, offset }: IGetArticleListParams,
        ) {
            try {
                // const result = await fetch('/');
                const articleList = await articleApi.getArticleList({
                    author,
                    tag,
                    favorited,
                    limit,
                    offset,
                });

                return articleList;
            } catch (e) {
                return {
                    data: null,
                    success: false,
                };
            }
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Running on ${url}`));

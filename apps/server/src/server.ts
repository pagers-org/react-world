import { articleApi } from './services/apis/article';
import {
    IGetArticleListParams,
    IGetArticleDetailParams,
    IGetArticleCommentsParams,
} from '@/types/article.type';
import { IGetUserProfileParams } from '@/types/profile.type';
import { tagsApi } from './services/apis/tags';
import { profileApi } from './services/apis/profile';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import pkg from 'body-parser';
import { gql } from 'graphql-tag';

const typeDefs = gql`
    # Queries
    # type Query 아네 적는 필드는 REST API의 end point와 같다. Ex. /getArticleList, /getArticleDetail, /getArticleComments
    type Query {
        getArticleList(
            tag: String
            author: String
            favorited: String
            offset: Int
            limit: Int
        ): Articles!
        getArticleDetail(slug: String!): Article!
        getArticleComments(slug: String!): Comments!
        getTags: Tags!
        getUserProfile(username: String!): Profile!
    }

    #################################

    # Return Type Interface
    type Articles {
        articles: [Article]
        articlesCount: Int
    }

    type Comments {
        comments: [Comment]
    }

    type Tags {
        tags: [String]
    }

    type Profile {
        profile: Author
    }

    #################################

    # Schema Interface
    type Article {
        slug: String
        title: String
        description: String
        body: String
        tagList: [String]
        createdAt: String
        updatedAt: String
        favorited: Boolean
        favoritesCount: Int
        author: Author
    }

    type Author {
        username: String
        bio: String
        image: String
        following: Boolean
    }

    type Comment {
        id: ID
        createdAt: String
        updatedAt: String
        body: String
        author: Author
    }

    type User {
        username: String
        bio: String
        image: String
        email: String
        token: String
    }
`;

const resolvers = {
    Query: {
        async getArticleList(
            _: never,
            { author, tag, favorited, limit, offset }: IGetArticleListParams,
        ) {
            try {
                // 가공이 필요하면 여기서 가공해야겠지?
                // Q1. 가공을 하면 Query의 Return Type도 일일이 수정을 해줘야되는건가 아니면 가공한 모든 값 중 원하는 값만 쓰기만 하면 되는건가
                // Q2.
                const articleList = await articleApi.getArticleList({
                    author,
                    tag,
                    favorited,
                    limit,
                    offset,
                });

                return articleList;
            } catch (e) {
                // TODO: Custom Error 내려주기
                return {
                    data: null,
                };
            }
        },
        async getArticleDetail(_: never, { slug }: IGetArticleDetailParams) {
            try {
                const articleDetail = await articleApi.getArticleDetail({
                    slug,
                });

                return articleDetail;
            } catch (e) {
                return {
                    data: null,
                };
            }
        },
        async getArticleComments(
            _: never,
            { slug }: IGetArticleCommentsParams,
        ) {
            try {
                const articleComments = await articleApi.getArticleComments({
                    slug,
                });

                return articleComments;
            } catch (e) {
                return {
                    data: null,
                };
            }
        },
        async getTags() {
            try {
                const tags = await tagsApi.getTags();

                return tags;
            } catch (e) {
                return {
                    data: null,
                };
            }
        },
        async getUserProfile(_: never, { username }: IGetUserProfileParams) {
            try {
                const userProfile = await profileApi.getUserProfile({
                    username,
                });

                return userProfile;
            } catch {
                return {
                    data: null,
                };
            }
        },
    },
};

const { json } = pkg;

interface MyContext {
    token?: String;
}

async function App() {
    const app = express();
    const httpServer = http.createServer(app);

    const server = new ApolloServer<MyContext>({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();
    app.use(
        '/graphql',
        cors<cors.CorsRequest>(),
        json(),
        expressMiddleware(server, {
            context: async ({ req }) => ({ token: req.headers.token }),
        }),
    );

    await new Promise<void>(resolve =>
        httpServer.listen({ port: 4000 }, resolve),
    );
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
}

App();

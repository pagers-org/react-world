import { ApolloServer, gql } from 'apollo-server';
import { articleApi } from './services/apis/article';
import {
    IGetArticleListParams,
    IGetArticleDetailParams,
    IGetArticleCommentsParams,
} from '@/types/article.type';
import { IGetUserProfileParams } from '@/types/profile.type';
import { tagsApi } from './services/apis/tags';
import { profileApi } from './services/apis/profile';

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

        //
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

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Running on ${url}`));

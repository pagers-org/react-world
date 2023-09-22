import HomeComponent from '@/components/home';
import {
    GArticlesQuery,
    articlesQuery,
} from '@/features/graphql/queries/articles';
import { tagsQuery } from '@/features/graphql/queries/tags';
import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';
import getQueryClient from 'config/react-query/get-query-client';
import { articleKeys, tagKeys } from 'config/react-query/query-key-factory';
import { request } from 'graphql-request';

export default async function Page({
    searchParams,
}: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    const queryClient = getQueryClient();

    await queryClient.prefetchQuery(articleKeys.lists(), () =>
        request<GArticlesQuery>(
            process.env.NEXT_PUBLIC_GRAPHQL_API_BASE_URL as string,
            articlesQuery,
            {
                // parameters
                tag: searchParams?.tag,
                author: searchParams?.author,
                favorited: searchParams?.favorited,
                offset: Number(searchParams?.offset),
                limit: Number(searchParams?.limit),
            },
        ),
    );

    await queryClient.prefetchQuery(tagKeys.lists(), () =>
        request<GArticlesQuery>(
            process.env.NEXT_PUBLIC_GRAPHQL_API_BASE_URL as string,
            tagsQuery,
        ),
    );

    const dehydratedState = dehydrate(queryClient);

    return (
        <Hydrate state={dehydratedState}>
            <HomeComponent />
        </Hydrate>
    );
}

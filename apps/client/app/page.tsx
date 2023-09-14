import TestComponent from '@/components/test-component';
import {
    GArticlesQuery,
    articlesQuery,
} from '@/features/graphql/queries/articles';
import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';
import getQueryClient from 'config/react-query/get-query-client';
import { articleKeys } from 'config/react-query/query-key-factory';
import { request } from 'graphql-request';

export default async function Page() {
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery(articleKeys.lists(), () =>
        request<GArticlesQuery>(
            'http://localhost:4000/articles',
            articlesQuery,
        ),
    );
    const dehydratedState = dehydrate(queryClient);

    return (
        <Hydrate state={dehydratedState}>
            <TestComponent />
        </Hydrate>
    );
}

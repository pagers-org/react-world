'use client';

import { articleKeys } from 'config/react-query/query-key-factory';
import { request, gql } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import {
    GArticlesQuery,
    articlesQuery,
} from '@/features/graphql/queries/articles';

export default function TestComponent() {
    const { data } = useQuery({
        queryKey: articleKeys.lists(),
        queryFn: async () =>
            request<GArticlesQuery>(
                'http://localhost:4000/articles',
                articlesQuery,
            ),
    });

    console.log(data);
    return <div>TestComponent</div>;
}

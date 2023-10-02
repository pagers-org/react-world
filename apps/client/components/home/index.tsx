'use client';

import { request } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import {
    GArticlesQuery,
    articlesQuery,
} from '@/features/graphql/queries/articles';
import HomeBanner from './home-banner';
import ArticleList from './article-list';
import FeedToggle from './feed-toggle';
import Pagination from '../composable/pagination';
import TagList from './tag-list';
import { TReturnComponent } from '@/types/common.type';
import { articleKeys } from '@/config/react-query/query-key-factory';
import { useCallback } from 'react';

export default function HomeComponent(): TReturnComponent {
    const { data } = useQuery({
        queryKey: articleKeys.lists(),
        queryFn: async () =>
            request<GArticlesQuery>(
                process.env.NEXT_PUBLIC_GRAPHQL_API_BASE_URL as string,
                articlesQuery,
            ),
    });

    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const currentPage = searchParams.get('page') || 1;
    const showPageCnt = searchParams.get('limit') || 10;
    const articleListData = data?.getArticleList.articles || [];
    const totalCnt = data?.getArticleList.articlesCount || 0;

    // TODO: 여러 컴포넌트에서 반복 사용할 함수가 될 예정이므로 분리 필요
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);

            return params.toString();
        },
        [searchParams],
    );

    const onClickPagination = (page: number) => {
        const queryString = createQueryString('page', String(page));
        router.push(pathname + '?' + queryString);
    };

    return (
        <div className="home-page">
            <HomeBanner />
            <div className="container page">
                <div className="row">
                    <div className="col-md-9">
                        <FeedToggle />
                        <ArticleList articleListData={articleListData} />
                        {totalCnt > 0 && (
                            <Pagination
                                currentPage={currentPage as number}
                                showPageCnt={showPageCnt as number}
                                onClick={onClickPagination}
                                totalCnt={totalCnt}
                            />
                        )}
                    </div>
                    <div className="col-md-3">
                        <TagList />
                    </div>
                </div>
            </div>
        </div>
    );
}

'use client';

import { request } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

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

import ErrorBoundary from '../error-boundary';
import { Suspense } from 'react';
import useCustomNavigate from '@/features/hooks/use-create-query-string';

export default function HomeComponent(): TReturnComponent {
    const { moveToUrlWithoutAnchor } = useCustomNavigate();

    const searchParams = useSearchParams();

    const currentPage = searchParams.get('page') || 1;
    const showPageCnt = searchParams.get('limit') || 10;

    const { data } = useQuery({
        queryKey: articleKeys.lists(),
        queryFn: async () =>
            request<GArticlesQuery>(
                process.env.NEXT_PUBLIC_GRAPHQL_API_BASE_URL as string,
                articlesQuery,
            ),
    });

    const articleListData = data?.getArticleList.articles || [];
    const totalCnt = data?.getArticleList.articlesCount || 0;

    const onClickPagination = (page: number) => {
        moveToUrlWithoutAnchor({ key: 'page', value: String(page) });
    };

    return (
        <div className="home-page">
            <HomeBanner />
            <div className="container page">
                <div className="row">
                    <div className="col-md-9">
                        <ErrorBoundary fallback={<div>Feed Error</div>}>
                            <FeedToggle />
                        </ErrorBoundary>
                        <ErrorBoundary fallback={<div>articleList Error</div>}>
                            <ArticleList articleListData={articleListData} />
                        </ErrorBoundary>
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
                        <ErrorBoundary fallback={<div>tag Error</div>}>
                            <TagList />
                        </ErrorBoundary>
                    </div>
                </div>
            </div>
        </div>
    );
}

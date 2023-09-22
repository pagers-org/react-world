'use client';

import { articleKeys } from 'config/react-query/query-key-factory';
import { request } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import {
    GArticlesQuery,
    articlesQuery,
} from '@/features/graphql/queries/articles';
import HomeBanner from './home-banner';
import ArticleList from './article-list';
import FeedToggle from './feed-toggle';
import Pagination from '../composable/pagination';
import TagList from './tag-list';

export default function HomeComponent() {
    const { data } = useQuery({
        queryKey: articleKeys.lists(),
        queryFn: async () =>
            request<GArticlesQuery>(
                process.env.NEXT_PUBLIC_GRAPHQL_API_BASE_URL as string,
                articlesQuery,
            ),
    });

    const articleListData = data?.getArticleList.articles || [];
    const totalCount = data?.getArticleList.articlesCount;

    return (
        <div className="home-page">
            <HomeBanner />
            <div className="container page">
                <div className="row">
                    <div className="col-md-9">
                        <FeedToggle />
                        <ArticleList articleListData={articleListData} />
                        <Pagination />
                    </div>

                    <div className="col-md-3">
                        <TagList />
                    </div>
                </div>
            </div>
        </div>
    );
}

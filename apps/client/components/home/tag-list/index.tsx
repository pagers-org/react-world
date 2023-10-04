import { GTagsQuery, tagsQuery } from '@/features/graphql/queries/tags';
import useCustomNavigate from '@/features/hooks/use-create-query-string';
import { useQuery } from '@tanstack/react-query';
import { tagKeys } from 'config/react-query/query-key-factory';
import request from 'graphql-request';
import Link from 'next/link';
import { useEffect } from 'react';

export default function TagList() {
    const { data } = useQuery({
        queryKey: tagKeys.lists(),
        queryFn: async () =>
            request<GTagsQuery>(
                process.env.NEXT_PUBLIC_GRAPHQL_API_BASE_URL as string, // GRAPHQL은 BASEURL을 일일이 설정해줘야 하는건가?
                tagsQuery,
            ),
    });

    const { moveToUrlWithAnchor } = useCustomNavigate();

    const tags = data?.getTags.tags || []; // 뭔가 서버에서 SDL을 만들 때 이상하게 만든건지 데이터가 왜 deps가 하나가 더 있는거 같지

    return (
        <div className="sidebar">
            <p>Popular Tags</p>
            <div className="tag-list">
                {tags.map(tag => (
                    <Link
                        key={tag}
                        className="tag-pill tag-default"
                        href={moveToUrlWithAnchor({ key: 'tag', value: tag })}
                    >
                        {tag}
                    </Link>
                ))}
            </div>
        </div>
    );
}

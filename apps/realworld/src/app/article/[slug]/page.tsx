import { getArticle, getGetArticleQueryKey } from '@/shared/api/realworld/endpoints/articles/articles';
import getQueryClient from '@/shared/utils/reactQueryClient';
import { dehydrate, Hydrate } from '@tanstack/react-query';
import Article from './article';
import { getArticleComments, getGetArticleCommentsQueryKey } from '@/shared/api/realworld/endpoints/comments/comments';

const HydratedArticle = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const queryClient = getQueryClient();
  await Promise.all([
    queryClient.prefetchQuery(getGetArticleQueryKey(slug), () => getArticle(slug), {
      staleTime: 1000,
    }),
    queryClient.prefetchQuery(getGetArticleCommentsQueryKey(slug), () => getArticleComments(slug), { staleTime: 1000 }),
  ]);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <div className="flex ">
        <Article slug={slug} />
      </div>
    </Hydrate>
  );
};

export default HydratedArticle;

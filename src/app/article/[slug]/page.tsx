import { FeedResponse } from '@/types/api/articles';
import { redirect } from 'next/navigation';

import ArticleDetailPageMain from '@/pageComponents/article/[slug]/ArticleDetailPageMain';

import { getArticle } from '@/api/articles';

const getArticleDetail = async (slug: string) => {
  try {
    const res = (await getArticle(slug)) as FeedResponse;
    return res.article;
  } catch (e) {
    redirect('/');
  }
};

const ArticleDetailPage = async ({ params }: { params: { slug: string } }) => {
  const article = await getArticleDetail(params.slug);

  return <ArticleDetailPageMain article={article} />;
};

export default ArticleDetailPage;

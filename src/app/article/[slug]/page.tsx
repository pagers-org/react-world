import { redirect } from 'next/navigation';

import ArticleDetailPageMain from '@/pageComponents/article/[slug]/ArticleDetailPageMain';

import { getArticle } from '@/api/articles';

const getArticleDetail = async (slug: string) => {
  if (!slug) {
    redirect('/');
  }

  const res = await getArticle(slug);

  if (res?.errors) {
    redirect('/');
  }

  return res.article;
};

const ArticleDetailPage = async ({ params }: { params: { slug: string } }) => {
  const article = await getArticleDetail(params.slug);

  return <ArticleDetailPageMain article={article} />;
};

export default ArticleDetailPage;

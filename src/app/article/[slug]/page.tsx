import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import ArticleDetailPageMain from '@/pageComponents/article/[slug]/ArticleDetailPageMain';

import { COOKIE_ACCESS_TOKEN_KEY } from '@/constants/key';

import { getArticle } from '@/api/articles';

const getArticleDetail = async (slug: string) => {
  const cookieStore = cookies();

  const accessToken = cookieStore.get(COOKIE_ACCESS_TOKEN_KEY)?.value;

  if (!slug) {
    redirect('/');
  }

  const res = await getArticle(slug, {
    Authorization: `Bearer ${accessToken}`,
  });

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

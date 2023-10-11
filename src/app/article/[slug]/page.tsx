import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import ArticleDetailPageMain from '@/pageComponents/article/[slug]/ArticleDetailPageMain';

import { ERROR } from '@/constants/error';
import { COOKIE_ACCESS_TOKEN_KEY } from '@/constants/key';

import { getArticle } from '@/api/articles';

const getArticleDetail = async (slug: string) => {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get(COOKIE_ACCESS_TOKEN_KEY)?.value;

    const res = await getArticle({
      slug,
      headers: {
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
    });

    if (res?.errors || res?.status === 'error') {
      throw new Error(ERROR.ARTICLE_DETAIL);
    }

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

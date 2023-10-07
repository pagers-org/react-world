import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import EditorPageMain from '@/pageComponents/editor/EditorPageMain';

import { ERROR } from '@/constants/error';
import { COOKIE_ACCESS_TOKEN_KEY } from '@/constants/key';

import { getArticle } from '@/api/articles';

export type EditorFormType = {
  title: string;
  description: string;
  body: string;
  tagList: string[];
};

const getArticleDetail = async (slug: string) => {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get(COOKIE_ACCESS_TOKEN_KEY)?.value;

    const res = await getArticle({
      slug,
      headers: {
        Authorization: `Bearer ${accessToken}`,
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

const EditorPage = async ({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) => {
  let form: EditorFormType = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };

  const slug = searchParams?.title as string | undefined;

  if (slug) {
    const { title, description, body, tagList } = await getArticleDetail(slug);

    form = {
      title,
      description,
      body,
      tagList,
    };
  }

  return (
    <EditorPageMain
      currentForm={form}
      isEditMode={!!form.title}
      slug={slug ?? null}
    />
  );
};

export default EditorPage;

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import EditorPageMain from '@/pageComponents/editor/EditorPageMain';

import { COOKIE_ACCESS_TOKEN_KEY } from '@/constants/key';

import { getArticle } from '@/api/articles';

export type EditorFormType = {
  title: string;
  description: string;
  body: string;
  tagList: string[];
};

const getArticleDetail = async (slug: string) => {
  const cookieStore = cookies();

  const accessToken = cookieStore.get(COOKIE_ACCESS_TOKEN_KEY)?.value;

  const res = await getArticle(slug, {
    Authorization: `Bearer ${accessToken}`,
  });

  if (res?.errors) {
    redirect(`/article/${slug}`);
  }

  return res.article;
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

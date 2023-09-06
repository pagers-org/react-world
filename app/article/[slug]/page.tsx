import Banner from '@/components/layouts/Banner';
import TagList from '@/components/tags/TagList';
import UserBox from '@/components/user/UserBox';
import { fetchArticle } from '@/services/articles';
import React from 'react';
type Props = {
  params: { slug: string };
};
const ArticlePage = async ({ params: { slug } }: Props) => {
  const {
    article: { title, author, createdAt, body, tagList },
  } = await fetchArticle(slug);

  return (
    <div>
      <Banner>
        <div>{title}</div>
        <div>
          <UserBox author={author} createdAt={createdAt} />
        </div>
      </Banner>
      <div>{body}</div>
      <TagList tags={tagList} />
      <div></div>
    </div>
  );
};

export default ArticlePage;

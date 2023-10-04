'use client';

import { articleTextarea } from '@/styles/article.css';
import { input } from '@/styles/common.css';
import { editorButton, editorForm } from '@/styles/editor.css';
import TagInput from './TagInput';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { NewArticle } from '@/types';
import { useRouter } from 'next/navigation';
import { getArticleAPI } from '@/services/articles';

const EditForm = ({ slug }: { slug: string }) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data: article } = useQuery({
    queryKey: ['article', slug],
    queryFn: async () => await getArticleAPI(slug),
    enabled: !!slug,
    select: res => res.article,
  });

  const [formData, setFormData] = useState<NewArticle>({
    title: article ? article.title : '',
    description: article ? article.description : '',
    body: article ? article.body : '',
    tagList: article ? [...article.tagList] : [],
  });

  const { mutate } = useMutation({
    mutationFn: () =>
      fetch('/api/articles/new', { method: 'POST', body: JSON.stringify({ article: formData }) }).then(res =>
        res.json()
      ),
    onSuccess: data => {
      console.log('등록 성공');

      console.log(data);
      queryClient.invalidateQueries(['articles', 'global']);
      router.push('router');
    },
    onError: (error: any) => {
      console.log('에러 발생');
      console.error(error);
    },
  });

  const handleClick = () => {
    mutate();
  };

  const handleChange = (e: any) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const appendTag = (tag: string) => {
    setFormData(prevData => ({ ...prevData, tagList: [...prevData.tagList, tag] }));
  };
  return (
    <div className={editorForm}>
      <input
        type="text"
        name="title"
        className={input}
        placeholder="Article Title"
        onChange={handleChange}
        value={formData.title}
      />
      <input
        type="text"
        name="description"
        className={input}
        placeholder="What's this article about?"
        onChange={handleChange}
        value={formData.description}
      />

      <textarea
        rows={8}
        name="body"
        className={articleTextarea}
        placeholder="Write your article (in markdown)"
        onChange={handleChange}
        value={formData.body}
      ></textarea>
      <TagInput appendTag={appendTag} />
      <div>
        <button className={editorButton} onClick={handleClick}>
          Publish Article
        </button>
      </div>
    </div>
  );
};

export default EditForm;

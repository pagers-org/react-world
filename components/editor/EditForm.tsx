'use client';

import { articleTextarea } from '@/styles/article.css';
import { input } from '@/styles/common.css';
import { editorButton, editorForm } from '@/styles/editor.css';
import TagInput from './TagInput';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { useRouter } from 'next/navigation';
import { NewArticle } from '@/types/api/articles';

const EditForm = ({ slug }: { slug?: string }) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data: article } = useQuery({
    queryKey: ['article', slug],
    queryFn: async () => await fetch(`/api/articles/${slug}`).then(res => res.json()),
    enabled: !!slug,
    select: res => res.data.article,
  });

  const [formData, setFormData] = useState<NewArticle>({
    title: article ? article.title : '',
    description: article ? article.description : '',
    body: article ? article.body : '',
    tagList: article ? [...article.tagList] : [],
  });

  const { mutate } = useMutation({
    mutationFn: async () => {
      if (slug) {
        return fetch(`/api/articles/${slug}`, { method: 'PUT', body: JSON.stringify({ article: formData }) }).then(
          res => res.json()
        );
      } else {
        return fetch('/api/articles/new', { method: 'POST', body: JSON.stringify({ article: formData }) }).then(res =>
          res.json()
        );
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['articles', 'global']);
      router.push('/');
    },
    onError: (error: any) => {
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

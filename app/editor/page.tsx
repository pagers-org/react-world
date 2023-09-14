'use client';
import TagInput from '@/components/editor/TagInput';
import { registerArticle } from '@/services/articles';
import { articleTextarea } from '@/styles/article.css';
import { commentTextarea } from '@/styles/comments.css';
import { container, input } from '@/styles/common.css';
import { editorForm, editorButton } from '@/styles/editor.css';
import React, { useState } from 'react';

const EditorPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    body: '',
    tagList: [],
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log('들어옴');

    // const res = await registerArticle();
    // console.log(res);
  };

  const handleChange = (e: any) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <section className={container}>
      <form onSubmit={handleSubmit} className={editorForm}>
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
        <TagInput setFormData={setFormData} />
        <div>
          <input type="submit" value="Publish Article" className={editorButton} />
        </div>
      </form>
    </section>
  );
};

export default EditorPage;

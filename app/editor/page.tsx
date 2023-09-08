import { container, input } from '@/styles/common.css';
import { editorForm } from '@/styles/editor.css';
import React from 'react';

const EditorPage = () => {
  return (
    <div className={container}>
      <form className={editorForm}>
        <input type="text" className={input} placeholder="Article Title" />
        <input type="text" className={input} placeholder="What's this article about?" />
        <input type="text" className={input} placeholder="Write your article (in markdown)" />
        <input type="text" className={input} placeholder="Enter tags" />
        <input type="submit" value="Publish Article" />
      </form>
    </div>
  );
};

export default EditorPage;

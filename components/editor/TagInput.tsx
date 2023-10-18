'use client';

import { input } from '@/styles/common.css';
import { useState } from 'react';
import TagList from '../tags/TagList';

type Props = {
  appendTag: (tag: string) => void;
};

const TagInput = ({ appendTag }: Props) => {
  const [value, setValue] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter' && value.trim() !== '') {
      appendTag(value);
      setTags(prev => [...prev, value]);
      setValue('');
    }
  };

  const handleTagClick = (tag: string) => {
    setTags((prevTags: string[]) => prevTags.filter(prevTag => prevTag !== tag));
  };

  return (
    <>
      <input
        placeholder="Enter tags"
        value={value}
        name="tagList"
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className={input}
      />
      <TagList tags={tags} onClick={handleTagClick} />
    </>
  );
};

export default TagInput;

'use client';

import { input } from '@/styles/common.css';
import { useState } from 'react';
import TagList from '../tags/TagList';

type Props = {
  setFormData: any;
};

const TagInput = ({ setFormData }: Props) => {
  const [value, setValue] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter' && value.trim() !== '') {
      setFormData(prevData => ({ ...prevData, tagList: tags }));
      setTags(prev => [...prev, value]);
      setValue('');
    }
  };

  const handleClick = (tag: string) => {
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
      <TagList tags={tags} onClick={handleClick} />
    </>
  );
};

export default TagInput;

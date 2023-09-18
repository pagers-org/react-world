'use client';

import getQueryClient from '@/libs/getQueryClient';
import { getArticlesWithTagAPI } from '@/services/articles';
import { tagFill, tagItem, tagList } from '@/styles/layout.css';
import { useMutation } from '@tanstack/react-query';

type Props = {
  tags: string[];
};
const TagList = ({ tags }: Props) => {
  // const queryClient = getQueryClient();
  // const { data, mutate } = useMutation({
  //   mutationKey: ['tag'],
  //   mutationFn: (tag: string) => getArticlesWithTagAPI(tag),
  //   onSuccess: res => {
  //     console.log(res);
  //     queryClient.invalidateQueries(['tag']);
  //   },
  // });

  // const handleTagClick = (tag: string) => {
  //   mutate(tag);
  // };
  return (
    <ul className={tagList}>
      {/* {tags?.map((tag, index) => (
        <li
          key={index}
          className={`${tagItem} ${tagFill}`}
          onClick={() => (handleTagClick ? handleTagClick(tag) : console.log('없음'))}
        >
          {tag}
        </li>
      ))} */}
    </ul>
  );
};

export default TagList;

'use client';
import Button from '@/composables/Button';
import { PlusIcon } from '@/composables/icons';
import { fontSize } from '@/styles/common.css';
type Props = {
  author: any;
};
const FollowButton = ({ author }: Props) => {
  return (
    <Button onClick={() => console.log('클릭')} type="gray">
      <PlusIcon className={fontSize} />
      Follow {author.username}
    </Button>
  );
};

export default FollowButton;

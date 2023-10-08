'use client';
import Button from '@/composables/Button';
import { PlusIcon } from '@/composables/icons';
import useProfile from '@/hooks/useProfile';
import { fontSize } from '@/styles/common.css';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
type Props = {
  author: any;
  slug?: string;
};
const FollowButton = ({ author: { username, following }, slug }: Props) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const onSuccess = () => {
    queryClient.invalidateQueries(['article', slug]);
  };

  const onError = () => {
    router.push('/login');
  };

  const { follow, unFollow } = useProfile({ onSuccess, onError });

  const handleButtonClick = (username: string) => {
    if (following) {
      unFollow(username);
    } else {
      follow(username);
    }
  };

  return (
    <Button onClick={() => handleButtonClick(username)} type="gray">
      <PlusIcon className={fontSize} /> {following ? 'Unfollow' : 'Follow'} {username}
    </Button>
  );
};

export default FollowButton;

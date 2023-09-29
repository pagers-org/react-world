'use client';
import Button from '@/composables/Button';
import { PlusIcon } from '@/composables/icons';
import { fontSize } from '@/styles/common.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
type Props = {
  author: any;
};
const FollowButton = ({ author: { username, following } }: Props) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async () => {
      const method = following ? 'DELETE' : 'POST';
      return fetch(`/api/profiles/${username}`, { method }).then(res => res.json());
    },
    onSuccess: data => {
      queryClient.invalidateQueries(['articles', 'global']);
      console.log(data);
    },
    onError: error => {
      console.error(error);
      router.push('/login');
    },
  });

  return (
    <Button onClick={() => mutate()} type="gray">
      <PlusIcon className={fontSize} /> {following ? 'Unfollow' : 'Follow'} {username}
    </Button>
  );
};

export default FollowButton;

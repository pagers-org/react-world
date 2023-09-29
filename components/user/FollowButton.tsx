'use client';
import Button from '@/composables/Button';
import { PlusIcon } from '@/composables/icons';
import { fontSize } from '@/styles/common.css';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
type Props = {
  author: any;
};
const FollowButton = ({ author }: Props) => {
  const router = useRouter();
  const { mutate } = useMutation({
    mutationFn: () => fetch(`/api/profiles/${author.username}`, { method: 'POST' }).then(res => res.json()),
    onSuccess: data => {
      console.log(data);
    },
    onError: error => {
      console.error(error);
      router.push('/login');
    },
  });

  return (
    <Button onClick={() => mutate()} type="gray">
      <PlusIcon className={fontSize} /> Follow {author.username}
    </Button>
  );
};

export default FollowButton;

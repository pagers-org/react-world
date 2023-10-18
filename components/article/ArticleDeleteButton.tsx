'use client';
import Button from '@/composables/Button';
import { useRouter } from 'next/navigation';

const ArticleDeleteButton = ({ slug }: { slug: string }) => {
  const router = useRouter();
  const handleButtonClick = async () => {
    await fetch(`/api/articles/${slug}`, { method: 'DELETE' }).then(res => res.json());
    router.push('/');
  };
  return (
    <Button onClick={handleButtonClick} type="red">
      Delete Article
    </Button>
  );
};

export default ArticleDeleteButton;

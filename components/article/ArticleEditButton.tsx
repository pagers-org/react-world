'use client';
import Button from '@/composables/Button';
import { useRouter } from 'next/navigation';

const ArticleEditButton = ({ slug }: { slug: string }) => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push(`/editor/${slug}`);
  };
  return (
    <Button onClick={handleButtonClick} type="gray">
      Edit Article
    </Button>
  );
};

export default ArticleEditButton;

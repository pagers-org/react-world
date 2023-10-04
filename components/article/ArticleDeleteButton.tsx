import Button from '@/composables/Button';

const ArticleDeleteButton = () => {
  const handleClick = () => {};
  return (
    <Button onClick={handleClick} type="red">
      Delete Article
    </Button>
  );
};

export default ArticleDeleteButton;

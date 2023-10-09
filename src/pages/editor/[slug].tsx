import { useParams } from '@solidjs/router';

const EditArticlePage = () => {
  const params = useParams();

  return (
    <>
      <h1>아티클 편집 페이지</h1>
      <div>{params.slug}</div>
    </>
  );
};

export default EditArticlePage;

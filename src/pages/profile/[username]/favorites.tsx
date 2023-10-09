import { useParams } from '@solidjs/router';

const FavoriteProfilePage = () => {
  const params = useParams();

  return (
    <>
      <h1>좋아요한 프로필 페이지</h1>
      <div>{params.username}</div>
    </>
  );
};

export default FavoriteProfilePage;

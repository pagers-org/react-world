import { useParams } from 'react-router-dom';

export default function Article() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>여기는 Article 의 {id}번째 게시물입니다</h1>
    </div>
  );
}

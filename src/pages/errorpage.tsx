import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/');
  };
  return (
    <div>
      <button type="button" onClick={onClick}>
        잘못된 경로입니다
      </button>
    </div>
  );
}

import './App.css';
import { useParams } from 'react-router-dom';

export default function App() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <div>
        <h1>안녕</h1>
      </div>
    </>
  );
}

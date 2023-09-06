import { banner, mainContainer, mainH1, mainText } from './app.css';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <div className={banner}>
        <div className={mainContainer}>
          <h1 className={mainH1}>conduit</h1>
          <p className={mainText}>A place to share your knowledge.</p>
        </div>
      </div>
    </div>
  );
}
